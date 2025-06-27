const productImages = [
  '21stcentury-biotin.png',
  'boldfit-omega3.png',
  'boroplus-antiseptic-cream.png',
  'cetaphil-moisturising-cream.png',
  'hk-vitals-multivitamin.png',
  'hkvitals-vitamind3.png',
  'hkvitals-zinc.png',
  'kapiva-aleovera-gel.png',
  'lotus-sunscreen.png',
  'mouthwash.png',
  'omorfee-bodywash.png',
  'qube-logo.png',
  'teatree-facewash.png'
];

const TestImage = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Product Images Test</h1>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '20px',
        padding: '20px'
      }}>
        {productImages.map((imageName) => (
          <div 
            key={imageName} 
            style={{
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              padding: '15px',
              textAlign: 'center',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            <div style={{ 
              height: '200px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '10px',
              backgroundColor: '#f8fafc',
              borderRadius: '4px',
              overflow: 'hidden'
            }}>
              <img 
                src={`/images/products/${imageName}`} 
                alt={imageName}
                style={{ 
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain'
                }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/images/placeholders/image-not-found.png';
                  target.alt = 'Image not found';
                }}
              />
            </div>
            <div style={{ 
              fontSize: '14px',
              color: '#64748b',
              wordBreak: 'break-all',
              padding: '0 5px'
            }}>
              {imageName}
            </div>
            <div style={{ 
              marginTop: '5px',
              fontSize: '12px',
              color: '#64748b'
            }}>
              <a 
                href={`/images/products/${imageName}`} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: '#3b82f6', textDecoration: 'none' }}
              >
                View Full Size
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestImage;
