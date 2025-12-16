export function generateSKU(product) {
  // Mapping for category codes
  const categoryCodes = {
    "nut": "NUT",
    "dried fruit": "DF",
    "seeds": "SD",
    "dates": "DT",
    "raisins": "RS"
  };

  // Convert type to 3-letter uppercase code
  const typeCode = product.type.slice(0, 3).toUpperCase();
  const nameCode = product.name.split(' ').length > 1 ? product.name.split(' ').map(item => item[0]).join('') : typeCode
  const categoryCode = categoryCodes[product.category.toLowerCase()] || "GEN"; // default to 'GEN'

  // Update each price entry with generated SKU
  product.weights = product.weights.map(entry => ({
    ...entry,
    sku: `${categoryCode}-${product.category === 'nut' ? nameCode : typeCode}-${entry.weight}`
  }));

  return product;
}