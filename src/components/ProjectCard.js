import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, onClick }) => {
  const styles = {
    clickIcon: {
      position: 'absolute',
      bottom: '10px',
      right: '10px',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      color: 'white',
      padding: '5px 10px',
      borderRadius: '5px',
      cursor: 'pointer'
    },
    projImgbx: {
      position: 'relative', // This is added to position the icon relative to the project box
      cursor: 'pointer'
    }
  };

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" style={styles.projImgbx} onClick={onClick}>
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
        <span style={styles.clickIcon}>Click on me!</span>
      </div>
    </Col>
  )
}
