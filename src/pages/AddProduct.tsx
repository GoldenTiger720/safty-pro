import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "@/context/ProductContext";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, X } from "lucide-react";

export default function AddProduct() {
  const navigate = useNavigate();
  const { addProduct } = useProducts();
  const { isAuthenticated } = useAuth();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    image: "",
    description: "",
    features: [""],
    specifications: [{ key: "", value: "" }],
    relatedProducts: [""],
    applicable_standards: [""],
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Redirect if not authenticated
  if (!isAuthenticated) {
    toast({
      title: "Authentication Required",
      description: "Please login to add products",
      variant: "destructive",
    });
    navigate("/login");
    return null;
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleArrayChange = (
    index: number,
    value: string,
    field: "features" | "relatedProducts" | "applicable_standards"
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].map((item, i) => (i === index ? value : item)),
    }));
  };

  const addArrayField = (
    field: "features" | "relatedProducts" | "applicable_standards"
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: [...prev[field], ""],
    }));
  };

  const removeArrayField = (
    index: number,
    field: "features" | "relatedProducts" | "applicable_standards"
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index),
    }));
  };

  const handleSpecificationChange = (
    index: number,
    key: string,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      specifications: prev.specifications.map((spec, i) =>
        i === index ? { ...spec, [key]: value } : spec
      ),
    }));
  };

  const addSpecification = () => {
    setFormData((prev) => ({
      ...prev,
      specifications: [...prev.specifications, { key: "", value: "" }],
    }));
  };

  const removeSpecification = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      specifications: prev.specifications.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validation
    if (!formData.name.trim()) {
      toast({
        title: "Validation Error",
        description: "Product name is required",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    if (!formData.price || parseFloat(formData.price) <= 0) {
      toast({
        title: "Validation Error",
        description: "Please enter a valid price",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Convert specifications array to object
    const specificationsObj: { [key: string]: string } = {};
    formData.specifications.forEach((spec) => {
      if (spec.key.trim() && spec.value.trim()) {
        specificationsObj[spec.key] = spec.value;
      }
    });

    // Filter out empty strings from arrays
    const features = formData.features.filter((f) => f.trim());
    const relatedProducts = formData.relatedProducts.filter((p) => p.trim());
    const applicable_standards = formData.applicable_standards.filter((s) =>
      s.trim()
    );

    try {
      addProduct({
        name: formData.name,
        category: formData.category,
        price: parseFloat(formData.price),
        image: formData.image || "/images/placeholder.jpg",
        description: formData.description,
        features,
        specifications: specificationsObj,
        relatedProducts,
        applicable_standards:
          applicable_standards.length > 0 ? applicable_standards : undefined,
      });

      toast({
        title: "Success!",
        description: "Product has been added successfully",
      });

      navigate("/products");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add product. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-safety-darkBlue">
            Add New Product
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-safety-darkGray">
                Basic Information
              </h3>

              <div>
                <Label htmlFor="name">Product Name *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g., Aluminum Wolf Jump 600mm"
                  required
                />
              </div>

              <div>
                <Label htmlFor="category">Category</Label>
                <Input
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  placeholder="e.g., Wolf Jumps, Safety Railings"
                />
              </div>

              <div>
                <Label htmlFor="price">Price (USD) *</Label>
                <Input
                  id="price"
                  name="price"
                  type="number"
                  step="0.01"
                  value={formData.price}
                  onChange={handleInputChange}
                  placeholder="e.g., 1299.99"
                  required
                />
              </div>

              <div>
                <Label htmlFor="image">Image URL</Label>
                <Input
                  id="image"
                  name="image"
                  value={formData.image}
                  onChange={handleInputChange}
                  placeholder="e.g., /images/product.jpg"
                />
              </div>

              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Enter product description"
                  rows={4}
                />
              </div>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-safety-darkGray">
                  Features
                </h3>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => addArrayField("features")}
                >
                  <Plus className="h-4 w-4 mr-1" /> Add Feature
                </Button>
              </div>

              {formData.features.map((feature, index) => (
                <div key={index} className="flex gap-2">
                  <Input
                    value={feature}
                    onChange={(e) =>
                      handleArrayChange(index, e.target.value, "features")
                    }
                    placeholder="e.g., Corrosion resistant"
                  />
                  {formData.features.length > 1 && (
                    <Button
                      type="button"
                      variant="destructive"
                      size="icon"
                      onClick={() => removeArrayField(index, "features")}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
            </div>

            {/* Specifications */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-safety-darkGray">
                  Specifications
                </h3>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={addSpecification}
                >
                  <Plus className="h-4 w-4 mr-1" /> Add Specification
                </Button>
              </div>

              {formData.specifications.map((spec, index) => (
                <div key={index} className="flex gap-2">
                  <Input
                    value={spec.key}
                    onChange={(e) =>
                      handleSpecificationChange(index, "key", e.target.value)
                    }
                    placeholder="Key (e.g., Material)"
                    className="flex-1"
                  />
                  <Input
                    value={spec.value}
                    onChange={(e) =>
                      handleSpecificationChange(index, "value", e.target.value)
                    }
                    placeholder="Value (e.g., Aluminum)"
                    className="flex-1"
                  />
                  {formData.specifications.length > 1 && (
                    <Button
                      type="button"
                      variant="destructive"
                      size="icon"
                      onClick={() => removeSpecification(index)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
            </div>

            {/* Related Products */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-safety-darkGray">
                  Related Products (IDs)
                </h3>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => addArrayField("relatedProducts")}
                >
                  <Plus className="h-4 w-4 mr-1" /> Add Related Product
                </Button>
              </div>

              {formData.relatedProducts.map((product, index) => (
                <div key={index} className="flex gap-2">
                  <Input
                    value={product}
                    onChange={(e) =>
                      handleArrayChange(
                        index,
                        e.target.value,
                        "relatedProducts"
                      )
                    }
                    placeholder="e.g., aluminum-wolf-jump-600mm"
                  />
                  {formData.relatedProducts.length > 1 && (
                    <Button
                      type="button"
                      variant="destructive"
                      size="icon"
                      onClick={() => removeArrayField(index, "relatedProducts")}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
            </div>

            {/* Applicable Standards */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-safety-darkGray">
                  Applicable Standards
                </h3>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => addArrayField("applicable_standards")}
                >
                  <Plus className="h-4 w-4 mr-1" /> Add Standard
                </Button>
              </div>

              {formData.applicable_standards.map((standard, index) => (
                <div key={index} className="flex gap-2">
                  <Input
                    value={standard}
                    onChange={(e) =>
                      handleArrayChange(
                        index,
                        e.target.value,
                        "applicable_standards"
                      )
                    }
                    placeholder="e.g., EN ISO 14122-4"
                  />
                  {formData.applicable_standards.length > 1 && (
                    <Button
                      type="button"
                      variant="destructive"
                      size="icon"
                      onClick={() =>
                        removeArrayField(index, "applicable_standards")
                      }
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
            </div>

            {/* Submit Buttons */}
            <div className="flex gap-4 pt-6">
              <Button
                type="submit"
                className="flex-1 bg-safety-blue hover:bg-safety-darkBlue"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Adding Product..." : "Add Product"}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate("/products")}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
