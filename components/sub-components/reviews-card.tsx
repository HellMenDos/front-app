
import React,{FC} from 'react'

const ReviewsCard: FC = () => {
  return (
    <div className="swiper-slide slide">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis unde suscipit quis consequuntur, tempora corporis ex molestias dignissimos in cumque sunt ducimus voluptate inventore harum earum rem aperiam vel modi?</p>
        <div className="user">
            <img src="images/pic-1.png" alt="" />
            <div className="info">
            <h3>john deo</h3>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
            </div>
            </div>
        </div>
    </div>
  )
}

export default ReviewsCard
