# Product Management Feature

This document describes the product management feature that allows authenticated users to add and delete products from the SafetyPro platform.

## Features Overview

### 1. **Add Products**
- Authenticated users can add new products to the catalog
- Comprehensive form with all product fields
- Real-time validation
- Dynamic fields for features, specifications, standards, and related products

### 2. **Delete Products**
- Remove products from the catalog
- Confirmation dialog before deletion
- Toast notifications for user feedback

### 3. **Manage Products**
- View all products in a centralized management interface
- Quick access to add new products
- Delete products with confirmation

## How to Use

### Prerequisites
- Users must be logged in to access product management features
- Login at `/login` or signup at `/signup`

### Adding a Product

1. **Navigate to Product Management**
   - Click on your user profile icon in the navbar
   - Select "Manage Products" from the dropdown menu
   - OR directly visit `/manage-products`

2. **Click "Add New Product"**
   - You'll be redirected to the add product form at `/add-product`

3. **Fill in Product Details**

   **Required Fields:**
   - **Product Name**: Unique name for the product
   - **Price**: Product price in USD (must be greater than 0)

   **Optional Fields:**
   - **Category**: Product category (e.g., "Wolf Jumps", "Safety Railings")
   - **Image URL**: Path to product image (defaults to placeholder if empty)
   - **Description**: Detailed product description

4. **Add Dynamic Fields**

   **Features:**
   - Click "+ Add Feature" to add feature items
   - Enter features like "Corrosion resistant", "Quick assembly", etc.
   - Remove features using the red X button

   **Specifications:**
   - Click "+ Add Specification" to add key-value pairs
   - Enter specification key (e.g., "Material") and value (e.g., "Aluminum")
   - Remove specifications using the red X button

   **Related Products:**
   - Enter product IDs of related products
   - These will show in the "Related Products" section on product detail pages

   **Applicable Standards:**
   - Enter safety/quality standards (e.g., "EN ISO 14122-3")

5. **Submit the Form**
   - Click "Add Product" button
   - Product will be added to the catalog
   - You'll be redirected to the products page
   - Success notification will appear

### Deleting a Product

1. **Navigate to Manage Products**
   - Profile dropdown → "Manage Products"
   - OR visit `/manage-products`

2. **Find the Product to Delete**
   - Browse through the product list
   - Each product card shows key information

3. **Click "Delete" Button**
   - Click the red "Delete" button on the product card
   - Confirmation dialog will appear

4. **Confirm Deletion**
   - Click "Delete" in the confirmation dialog
   - OR click "Cancel" to abort
   - Product will be permanently removed
   - Success notification will appear

## Technical Implementation

### Architecture

**Product Context** ([src/context/ProductContext.tsx](src/context/ProductContext.tsx))
- Manages global product state
- Provides CRUD operations for products
- Persists products to localStorage
- Initialized with default products from static data

**Pages:**
- **Add Product** ([src/pages/AddProduct.tsx](src/pages/AddProduct.tsx)): Form for creating new products
- **Manage Products** ([src/pages/ManageProducts.tsx](src/pages/ManageProducts.tsx)): Product listing with delete functionality

**Routes:**
- `/add-product`: Add new product form
- `/manage-products`: Manage all products

### Data Flow

1. **Initial Load**
   - ProductContext loads products from localStorage
   - If no products in localStorage, uses default products from [src/data/products.ts](src/data/products.ts)

2. **Add Product**
   - Form validates input
   - ProductContext.addProduct() adds product to state
   - State automatically syncs to localStorage
   - Product ID is auto-generated from product name

3. **Delete Product**
   - User clicks delete button
   - Confirmation dialog appears
   - ProductContext.deleteProduct() removes from state
   - State syncs to localStorage

4. **Data Persistence**
   - All product changes persist to localStorage
   - Products survive page refreshes
   - Reset by clearing localStorage or browser cache

### Product Data Structure

```typescript
interface Product {
  id: string;                          // Auto-generated from name
  name: string;                        // Product name (required)
  category: string;                    // Product category
  price: number;                       // Price in USD (required)
  image: string;                       // Image URL
  description: string;                 // Product description
  features: string[];                  // Array of feature strings
  specifications: {                    // Key-value specifications
    [key: string]: string;
  };
  relatedProducts: string[];           // Array of product IDs
  applicable_standards?: string[];     // Optional standards array
}
```

### Context API

```typescript
interface ProductContextType {
  products: Product[];                              // All products
  addProduct: (product: Omit<Product, "id">) => void;  // Add new product
  deleteProduct: (productId: string) => void;       // Delete by ID
  updateProduct: (productId: string, product: Partial<Product>) => void;  // Update product
  getProductById: (productId: string) => Product | undefined;  // Get single product
}
```

## Navigation Updates

The navbar has been updated to include product management:

**Desktop:**
- User profile dropdown → "Manage Products" menu item

**Mobile:**
- User menu → "Manage Products" button

## Authentication Requirements

All product management features require authentication:
- Attempting to access `/add-product` or `/manage-products` without authentication redirects to `/login`
- Toast notification informs users they need to log in

## Validation

**Form Validation:**
- Product name: Required, non-empty
- Price: Required, must be > 0
- Features: Empty entries filtered out
- Specifications: Empty key-value pairs filtered out
- Related Products: Empty IDs filtered out
- Standards: Empty entries filtered out

## User Feedback

**Toast Notifications:**
- ✓ Success: "Product has been added successfully"
- ✓ Success: "Product Deleted - The product has been removed successfully"
- ✗ Error: "Validation Error" with specific message
- ✗ Error: "Failed to add product. Please try again."
- ⚠️ Warning: "Authentication Required - Please login to add/manage products"

**Confirmation Dialogs:**
- Delete confirmation: "Are you sure? This action cannot be undone."

## Pages Affected

All pages now use ProductContext instead of static product data:

1. [src/pages/Products.tsx](src/pages/Products.tsx) - Product listing page
2. [src/pages/ProductDetails.tsx](src/pages/ProductDetails.tsx) - Single product view
3. [src/pages/Index.tsx](src/pages/Index.tsx) - Homepage featured products
4. [src/pages/CategoryPage.tsx](src/pages/CategoryPage.tsx) - Category-specific products
5. [src/components/FeaturedProductSections.tsx](src/components/FeaturedProductSections.tsx) - Featured sections

## Testing

### Manual Testing Steps

1. **Test Adding Product:**
   ```
   1. Login to the application
   2. Navigate to Manage Products
   3. Click "Add New Product"
   4. Fill in product details
   5. Add features, specifications
   6. Submit form
   7. Verify product appears in products list
   8. Check product detail page works
   ```

2. **Test Deleting Product:**
   ```
   1. Navigate to Manage Products
   2. Click Delete on any product
   3. Confirm deletion in dialog
   4. Verify product is removed
   5. Check product no longer appears in listings
   ```

3. **Test Persistence:**
   ```
   1. Add a new product
   2. Refresh the page
   3. Verify product still exists
   4. Delete the product
   5. Refresh the page
   6. Verify product is gone
   ```

4. **Test Authentication:**
   ```
   1. Logout
   2. Try to access /add-product
   3. Verify redirect to login
   4. Try to access /manage-products
   5. Verify redirect to login
   ```

## Development Server

The application is currently running at:
- **Local**: http://localhost:8081/
- **Network**: http://173.208.142.30:8081/

## Future Enhancements

Potential improvements for the product management system:

1. **Edit Products**: Add ability to edit existing products
2. **Bulk Operations**: Select and delete multiple products
3. **Product Images**: Upload images instead of URL entry
4. **Categories Management**: Add/edit/delete categories
5. **Search & Filter**: Search products in management view
6. **Sorting**: Sort products by name, price, date added
7. **Product Validation**: More robust validation rules
8. **Import/Export**: Import products from CSV, export to CSV
9. **Product History**: Track changes to products
10. **Admin Roles**: Restrict product management to admin users only

## Troubleshooting

**Products not appearing after refresh:**
- Check browser localStorage for saved products
- Clear localStorage and reload to reset to default products

**Cannot add product:**
- Ensure you are logged in
- Check all required fields are filled
- Verify price is a valid number > 0

**Delete not working:**
- Check browser console for errors
- Ensure product ID is valid
- Try refreshing the page

## Support

For issues or questions about product management features, please check:
- This documentation
- Application logs in browser console
- Network tab for API errors (if backend is added later)
