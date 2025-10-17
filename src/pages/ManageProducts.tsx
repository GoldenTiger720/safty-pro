import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "@/context/ProductContext";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Plus, Trash2, Package } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export default function ManageProducts() {
  const navigate = useNavigate();
  const { products, deleteProduct } = useProducts();
  const { isAuthenticated } = useAuth();
  const { toast } = useToast();
  const [productToDelete, setProductToDelete] = useState<string | null>(null);

  // Redirect if not authenticated
  if (!isAuthenticated) {
    toast({
      title: "Authentication Required",
      description: "Please login to manage products",
      variant: "destructive",
    });
    navigate("/login");
    return null;
  }

  const handleDelete = (productId: string) => {
    deleteProduct(productId);
    setProductToDelete(null);
    toast({
      title: "Product Deleted",
      description: "The product has been removed successfully",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-safety-darkBlue mb-2">
            Manage Products
          </h1>
          <p className="text-safety-gray">
            Total Products: {products.length}
          </p>
        </div>
        <Button
          onClick={() => navigate("/add-product")}
          className="bg-safety-blue hover:bg-safety-darkBlue"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add New Product
        </Button>
      </div>

      {products.length === 0 ? (
        <Card className="p-12 text-center">
          <Package className="h-16 w-16 mx-auto text-safety-gray mb-4" />
          <h3 className="text-xl font-semibold text-safety-darkGray mb-2">
            No Products Found
          </h3>
          <p className="text-safety-gray mb-6">
            Get started by adding your first product
          </p>
          <Button
            onClick={() => navigate("/add-product")}
            className="bg-safety-blue hover:bg-safety-darkBlue"
          >
            <Plus className="h-5 w-5 mr-2" />
            Add Product
          </Button>
        </Card>
      ) : (
        <div className="grid gap-4">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  {/* Product Image */}
                  <div className="md:w-48 h-48 md:h-auto flex-shrink-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "/images/placeholder.jpg";
                      }}
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-safety-darkBlue mb-2">
                          {product.name}
                        </h3>
                        <p className="text-sm text-safety-gray mb-1">
                          <span className="font-semibold">Category:</span>{" "}
                          {product.category}
                        </p>
                        <p className="text-sm text-safety-gray mb-1">
                          <span className="font-semibold">ID:</span>{" "}
                          {product.id}
                        </p>
                        <p className="text-2xl font-bold text-safety-blue mt-2">
                          ${product.price.toFixed(2)}
                        </p>
                      </div>

                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => setProductToDelete(product.id)}
                        className="ml-4"
                      >
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete
                      </Button>
                    </div>

                    <p className="text-safety-darkGray mb-4 line-clamp-2">
                      {product.description}
                    </p>

                    {/* Features */}
                    {product.features && product.features.length > 0 && (
                      <div className="mb-3">
                        <h4 className="text-sm font-semibold text-safety-darkGray mb-2">
                          Features:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {product.features.slice(0, 4).map((feature, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-safety-lightGray text-xs rounded"
                            >
                              {feature}
                            </span>
                          ))}
                          {product.features.length > 4 && (
                            <span className="px-2 py-1 bg-safety-lightGray text-xs rounded">
                              +{product.features.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Specifications */}
                    {product.specifications &&
                      Object.keys(product.specifications).length > 0 && (
                        <div>
                          <h4 className="text-sm font-semibold text-safety-darkGray mb-2">
                            Specifications:
                          </h4>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs">
                            {Object.entries(product.specifications)
                              .slice(0, 3)
                              .map(([key, value]) => (
                                <div key={key} className="text-safety-gray">
                                  <span className="font-semibold">{key}:</span>{" "}
                                  {value}
                                </div>
                              ))}
                          </div>
                        </div>
                      )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Delete Confirmation Dialog */}
      <AlertDialog
        open={productToDelete !== null}
        onOpenChange={() => setProductToDelete(null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the
              product from your catalog.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => productToDelete && handleDelete(productToDelete)}
              className="bg-red-600 hover:bg-red-700"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
