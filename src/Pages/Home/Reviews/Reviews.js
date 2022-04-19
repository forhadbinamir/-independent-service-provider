// import React, { useEffect, useState } from 'react';
// import AllReviews from './AllReviews';

// const Reviews = () => {
//     const [reviews, setReview] = useState([])

//     useEffect(() => {
//         fetch('ReviewData.json')
//             .then(res => res.json())
//             .then(data => setReview(data))
//     }, [])
//     return (
//         <div className='w-10/12 mx-auto'>
//             <h1 className='text-4xl my-5'>All Reviews</h1>
//             <div className='grid lg:grid-cols-3 md:grid-cols-1 gap-16'>
//                 {
//                     reviews.map(product => <AllReviews
//                         ket={product.key}
//                         product={product}
//                     ></AllReviews>)
//                 }
//             </div>
//         </div>
//     );
// };

// export default Reviews;