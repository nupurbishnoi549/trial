const reviews = [
    {
        title: "Michael Chen",
        invested: 350,
        profit: 4891,
        description:
            "The AI Arbitrage method is incredible! It helped me make significant profits quickly and effortlessly. My account manager was always there to support me every step of the wayThe AI Arbitrage method... <a href='#thanksForm' class='text_cyan_blue fw-medium'>Show More</a>",
        imageUrl: "./assets/images/arbitrage-winner/michael-chen-profile.webp",
    },
    {
        title: "Jennifer Wilson",
        invested: 2000,
        profit: 1368.23,
        description:
            "This method is a game-changer! I’ve seen amazing returns on my investments.",
        imageUrl: "./assets/images/arbitrage-winner/jenifer.webp",
    },
    {
        title: "Robert Thompson ",
        invested: 30000,
        profit: 8126,
        description:
            "AI Arbitrage made trading so simple and profitable. My account manager was always ready to help and provide valuable insights. Highly recommend it!",
        imageUrl: "./assets/images/arbitrage-winner/robert.webp",
    },
    {
        title: "Elizabeth Brown",
        invested: 350,
        profit: 5236.73,
        description:
            "This method is a game-changer! I’ve seen amazing returns on my investments.",
        imageUrl: "./assets/images/arbitrage-winner/elixabeth.webp",
    },
    {
        title: "David Clark",
        invested: 5000,
        profit: 3274.5,
        description:
            "The AI Arbitrage system is fantastic. It’s helped me achieve impressive profits effortlessly.",
        imageUrl: "./assets/images/arbitrage-winner/devon-lane-profile.webp",
    },
    {
        title: "Michelle Wright",
        invested: 50000,
        profit: 18156,
        description:
            "I love the AI Arbitrage method! My account manager provided excellent support, making the process smooth and profitable. It’s reliable, efficient, and highly profitable",
        imageUrl: "./assets/images/arbitrage-winner/michelle.webp",
    },
    {
        title: "Christopher Harris",
        invested: 350,
        profit: 5207,
        description:
            "AI Arbitrage has made my trading experience so much better. The support from my account manager was exceptional. Great profits in no time!",
        imageUrl: "./assets/images/arbitrage-winner/christopher.webp",
    },
    {
        title: "Sarah Martin",
        invested: 3500,
        profit: 2275,
        description:
            "This method is outstanding. It’s easy to use and delivers consistent profits.",
        imageUrl: "./assets/images/arbitrage-winner/sarah.webp",
    },
    {
        title: "Daniel Taylor",
        invested: 60000,
        profit: 23451,
        description:
            "AI Arbitrage has transformed my trading game. My account manager was always available for guidance and support. Highly recommend it for anyone looking to profit.",
        imageUrl: "./assets/images/arbitrage-winner/daniel.webp",
    },
    {
        title: "William Thompson",
        invested: 350,
        profit: 7155,
        description:
            "Amazing! The AI Arbitrage method is the easiest way to earn substantial profits. The assistance from my account manager made a big difference.",
        imageUrl: "./assets/images/arbitrage-winner/ralph-profile.webp",
    },
    {
        title: "Andrew Young",
        invested: 10000,
        profit: 7562.5,
        description:
            "AI Arbitrage has been a game changer for me. The profits are incredible!",
        imageUrl: "./assets/images/arbitrage-winner/andrew.webp",
    },
    {
        title: "Catherine Miller",
        invested: 35000,
        profit: 10153,
        description:
            "This method is so efficient and profitable. My account manager was instrumental in my success. I’m very pleased with the results",
        imageUrl: "./assets/images/arbitrage-winner/catherine.webp",
    },
    {
        title: "Brian Scott",
        invested: 350,
        profit: 9728,
        description:
            "AI Arbitrage is simply the best. It’s helped me achieve fantastic returns on my investments.",
        imageUrl: "./assets/images/arbitrage-winner/brian.webp",
    },
    {
        title: "Nancy Walker",
        invested: 4200,
        profit: 2940,
        description:
            "I’ve never seen such quick and easy profits. AI Arbitrage is a must-try for any trader.",
        imageUrl: "./assets/images/arbitrage-winner/nancy.webp",
    },
    {
        title: "Stephen White",
        invested: 70000,
        profit: 25378,
        description:
            "Absolutely love AI Arbitrage! It’s efficient, effective, and highly profitable.",
        imageUrl: "./assets/images/arbitrage-winner/esther-profile.webp",
    },
    {
        title: "Rebecca Hall",
        invested: 350,
        profit: 1589,
        description:
            "This method has made trading so much easier and more profitable for me. The support from my account manager was invaluable..",
        imageUrl: "./assets/images/arbitrage-winner/rabecca.webp",
    },
    {
        title: "Matthew King",
        invested: 7800,
        profit: 5460,
        description:
            "AI Arbitrage is fantastic! I’ve seen significant returns in a very short time.",
        imageUrl: "./assets/images/arbitrage-winner/mathew.webp",
    },
    {
        title: "Sophia Lee",
        invested: 45000,
        profit: 16659.4,
        description:
            "Profits have been rolling in thanks to AI Arbitrage. The help from my account manager was crucial in making the most out of my trades. It’s a brilliant method.",
        imageUrl: "./assets/images/arbitrage-winner/sophia.webp",
    },
    {
        title: "Paul Moore",
        invested: 350,
        profit: 8327,
        description:
            "This method is superb. It’s easy to use and delivers consistent profits.",
        imageUrl: "./assets/images/arbitrage-winner/paul.webp",
    },
    {
        title: "Lisa Campbell",
        invested: 6000,
        profit: 3846,
        description:
            "AI Arbitrage has revolutionized my trading strategy. The support from my account manager was exceptional. Highly recommend it.",
        imageUrl: "./assets/images/arbitrage-winner/lisa.webp",
    },
];
// Function to generate a review card
function generateReviewCard(review) {
    return `
    <div class="swiper-slide">
    <div class="slider_box bg-white box_gradient">
        <div class="d-flex flex-row flex_xsm_col align-items-start  justify-content-between">
            <div class="d-flex align-items-center gap-2">
                <img class="slider_profile_img rounded-pill object-fit-cover" sizes="100vw"
                    src="${review.imageUrl}" alt="${review.title}">
                <div class="ms-1">
                    <h2 class="text-black fw-semibold fs_base leading_130 mb-0">${review.title
        }</h2>
                    <img src="./assets/images/arbitrage-winner/review-star.svg" alt="review-star">
                </div>
            </div>
                    <div class="mt-sm-0 review_slider_parent">
                        <p class="mb-0 opacity_07 leading_150 fw-bold fs_base text-nowrap text-black">Invested <span class="text-black text-nowrap fw_800">${review.invested.toLocaleString()} CAD</span></p>
                        <p class="mb-0 opacity_07 leading_150 fw-bold fs_base text-nowrap text-black">Profit: <span class="text-black text-nowrap fw_800">${review.profit.toLocaleString()} CAD</span></p>
                    </div>
           </div>
        <p class="leading_150 fs_base text-black opacity_07 pt-sm-4 mt-sm-1 mt-3 mb-0"><span class="fw-bold">Review</span> ${review.description
        }</p></div>
    </div>
`;
}
// Function to render the review cards
function renderReviewCards() {
    const reviewSlider = document.getElementById("review-slider");
    reviewSlider.innerHTML = reviews.map(generateReviewCard).join("");
}
// Call the function to render the review cards
renderReviewCards();