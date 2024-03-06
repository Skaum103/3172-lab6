import React from 'react'
import mangoChickenImage from './images/mango-chicken.jpg'

function IndexPage() {
    return(
        <main class="pg-main-content">
            <p>
                Indulge your taste buds with our mouthwatering Spicy Mango Chicken Stir-Fry – 
                a symphony of flavors that will take your dinner to new heights! 
                Tender slices of chicken, vibrant vegetables, and juicy mango come together in a sizzling dance of sweet, savory, and spicy goodness. 
                Drizzled with a tantalizing blend of soy sauce, oyster sauce, honey, and a kick of Sriracha, this recipe is a culinary masterpiece that's quick and easy to whip up. 
                Elevate your weeknight meals and treat yourself to an explosion of taste – try our Spicy Mango Chicken Stir-Fry tonight! 🌶🥭🍲
            </p>
            <section class="recipes">
                <h2>Featured Recipes</h2>
                <h3>Click the images to view our featured recipes!</h3>
                <div class="recipe-item">
                    <a href="mango-chicken">
                        <img
                        alt="mango-chicken"
                        src={mangoChickenImage}
                        class="img-fluid rounded-top"
                        ></img>
                    </a>
                </div>
            </section>
        </main>
    )
}

export default IndexPage