export function PricingTables() {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Regular Cleaning Rates */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Regular Cleaning</h3>
          <ul className="space-y-2">
            <li>One-off: $70/hour</li>
            <li>Weekly: $63/hour</li>
            <li>Fortnightly/Monthly: $65/hour</li>
          </ul>
        </div>
  
        {/* House Cleaning Rates */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">House Cleaning</h3>
          <ul className="space-y-2">
            <li>1 Bedroom: $169</li>
            <li>2 Bedrooms: $189</li>
            <li>3 Bedrooms: $250</li>
            <li>4 Bedrooms: $290</li>
            <li>5 Bedrooms: $315</li>
            <li>6 Bedrooms: $365</li>
          </ul>
        </div>
  
        {/* Window Cleaning Rates */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Window Cleaning</h3>
          <ul className="space-y-2">
            <li>$12 per window</li>
          </ul>
        </div>
  
        {/* Combined Services - One Story */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Cleaning & Windows (One Story)</h3>
          <ul className="space-y-2">
            <li>1 Bedroom: $390</li>
            <li>2 Bedrooms: $420</li>
            <li>3 Bedrooms: $460</li>
            <li>4 Bedrooms: $500</li>
            <li>5 Bedrooms: $560</li>
          </ul>
        </div>
  
        {/* Combined Services - Two Story */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Cleaning & Windows (Two Story)</h3>
          <ul className="space-y-2">
            <li>1 Bedroom: $500</li>
            <li>2 Bedrooms: $530</li>
            <li>3 Bedrooms: $570</li>
            <li>4 Bedrooms: $610</li>
            <li>5 Bedrooms: $670</li>
          </ul>
        </div>
      </div>
    );
  }