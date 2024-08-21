const Card = ({ children } : { children: React.ReactNode }) => {
  

  const CardStyle = {
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    padding: '20px',
    margin: '20px',
  }

  return (
    <div style={CardStyle}>
      {children}
    </div>
  )
}

export default Card