// "use client"

// import { motion, useScroll, useTransform } from "framer-motion"
// import React, { useRef } from "react"

// export default function ParallaxContent() {
//   const ref = useRef(null)
//   const { scrollYProgress } = useScroll({ target: ref }) // Track scroll for this component

//   // Create a y-axis transform for the parallax effect
//   const y = useTransform(scrollYProgress, [0, 1], [0, 0]) // Adjust the values for a stronger or softer effect

//   return (
//     <motion.div
//       ref={ref}
//       style={{ y }} // Apply the parallax transform to this div
//       className="relative flex items-center justify-center px-6"
//     >
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
//         corporis maiores iusto ut quod suscipit beatae molestias, omnis aliquam
//         tempore minus iste doloremque odio cupiditate optio quibusdam vero natus
//         tenetur? Asperiores officiis ut officia non reiciendis provident id
//         soluta ipsam, magni unde vel, perferendis culpa quaerat fuga hic! Optio
//         nesciunt quasi quis illo blanditiis rem odit, sint debitis recusandae
//         quod. Corporis iure iste quidem, esse asperiores officia suscipit
//         expedita sed tempora minus quam similique facere perferendis soluta
//         labore ipsa dolore sint et corrupti sapiente veritatis quibusdam,
//         quisquam reprehenderit? Numquam, veniam? Molestiae, amet sequi culpa,
//         aliquid sed pariatur dignissimos beatae incidunt nihil quis quas
//         inventore, hic doloremque nulla? Alias sunt officiis porro, beatae ex,
//         nobis dolorum perferendis tempora rerum repudiandae similique. Ut
//         cupiditate accusamus quae, excepturi sapiente rem quaerat molestias esse
//         perferendis sint ipsam aspernatur praesentium consectetur inventore
//         ratione ducimus incidunt suscipit cum odit, alias eos. Voluptatum rerum
//         quidem commodi illo.
//       </p>
//     </motion.div>
//   )
// }
