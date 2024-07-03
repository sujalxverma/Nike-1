export default function About() {
    return (
        <>
            <div className="about-page">
                <div className="about-1">
                    About Sujal Verma
                </div>
                <div className="about-2">
                    Welcome to my corner of the digital world! I'm Sujal Verma, a passionate computer science enthusiast dedicated to exploring the endless possibilities of technology.
                </div>
                <div className="about-1">
                    My Journey
                </div>
                <div className="about-2">
                    Ever since my early days tinkering with computers, I've been captivated by the power of technology to transform ideas into reality. My journey in computer science began with a curiosity-driven exploration of programming languages, algorithms, and the intricate workings of software systems.
                </div>
                <div className="about-1">
                    Passion for Computer Science
                </div>
                <div className="about-2">
                    My passion for computer science is fueled by a relentless pursuit of knowledge and a desire to solve complex problems creatively. I find joy in delving into the nuances of coding, algorithmic challenges, and the evolving landscape of technology.
                </div>

                <div className="about-1">
                    Let's Connect
                </div>
                <div className="about-2">
                    I'm always eager to connect with like-minded individuals and organizations who share a passion for technology and innovation. Whether you have a project idea, collaboration opportunity, or simply want to chat about the latest tech trends, I'd love to hear from you.
 
                </div>
                {/* <div className="about-1">
                Feel free to reach out to me 
                </div> */}
                {/* <div className="about-3">
                    <a href="https://www.linkedin.com/in/sujal-verma-7b5a3a288/" target="_blank"><img src="" alt="" />
                    <img width={70} src="https://th.bing.com/th/id/OIP.w_zDkEJ9aLiWR-g0rff8hwHaHa?w=182&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
                    </a>
                    <a href="https://www.instagram.com/sujalvx/">
                    <img width={70} src="https://th.bing.com/th/id/OIP.izOOxDyHFwihHcQcKIExmQAAAA?w=173&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" /></a>
                </div> */}

<div className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <h3 className="font-semibold text-sm text-gray-600 text-center">
                    FEEL FREE TO REACH TO ME
                </h3>
                <div className="mt-6">
                    <ul className="flex gap-y-6 flex-wrap items-center justify-center [&>*]:px-12 lg:divide-x">
                        {/* LOGO 1 */}
                        {/* <li className="flex-none">
                            <svg className="w-28" viewBox="0 0 163 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M45.0503 14.0131H52.6724C57.5318 14.0131 61.546 16.8247 61.546 23.2442V24.5931C61.546 31.0613 57.7918 33.9704 52.8187 33.9704H45.0503V14.0131ZM49.3083 17.6373V30.33H52.5749C55.3377 30.33 57.1905 28.526 57.1905 24.5118V23.4555C57.1905 19.4412 55.2402 17.6373 52.4287 17.6373H49.3083ZM63.805 17.8323H67.2179L67.7705 21.5865C68.4205 19.0349 70.0782 17.6698 73.0848 17.6698H74.1412V21.9765H72.386C68.9243 21.9765 68.0792 23.1792 68.0792 26.5921V34.0192H63.87V17.8323H63.805ZM74.9863 26.2508V25.7957C74.9863 20.3838 78.448 17.426 83.161 17.426C87.9716 17.426 91.3357 20.3838 91.3357 25.7957V26.2508C91.3357 31.5652 88.0691 34.4255 83.161 34.4255C77.9441 34.3767 74.9863 31.5814 74.9863 26.2508ZM87.029 26.202V25.7957C87.029 22.7891 85.5175 20.9852 83.1123 20.9852C80.7557 20.9852 79.1955 22.6429 79.1955 25.7957V26.202C79.1955 29.1111 80.707 30.7688 83.1123 30.7688C85.5175 30.7201 87.029 29.1111 87.029 26.202ZM93.546 17.8323H97.0564L97.4627 20.8877C98.3078 18.8399 100.112 17.426 102.777 17.426C106.889 17.426 109.603 20.3838 109.603 25.8607V26.3158C109.603 31.6302 106.596 34.4417 102.777 34.4417C100.226 34.4417 98.4703 33.2879 97.6089 31.4351V39.6098H93.4972L93.546 17.8323ZM105.329 26.202V25.8445C105.329 22.6266 103.671 21.0339 101.461 21.0339C99.1041 21.0339 97.5439 22.8379 97.5439 25.8445V26.1533C97.5439 29.0136 99.0554 30.8176 101.412 30.8176C103.833 30.7688 105.329 29.2249 105.329 26.202ZM115.827 31.0288L115.47 33.9867H111.862V12.4204H115.974V20.6926C116.884 18.5799 118.688 17.426 121.239 17.426C125.107 17.4748 127.968 20.1401 127.968 25.5032V26.007C127.968 31.3701 125.253 34.4417 121.142 34.4417C118.428 34.3767 116.672 33.1253 115.827 31.0288ZM123.645 26.007V25.6007C123.645 22.6429 122.036 20.9852 119.777 20.9852C117.469 20.9852 115.86 22.8379 115.86 25.6495V26.007C115.86 29.0136 117.42 30.7688 119.728 30.7688C122.198 30.7688 123.645 29.2249 123.645 26.007ZM129.771 26.2508V25.7957C129.771 20.3838 133.233 17.426 137.946 17.426C142.757 17.426 146.121 20.3838 146.121 25.7957V26.2508C146.121 31.5652 142.806 34.4255 137.946 34.4255C132.729 34.3767 129.771 31.5814 129.771 26.2508ZM141.847 26.202V25.7957C141.847 22.7891 140.335 20.9852 137.93 20.9852C135.573 20.9852 134.013 22.6429 134.013 25.7957V26.202C134.013 29.1111 135.525 30.7688 137.93 30.7688C140.351 30.7201 141.847 29.1111 141.847 26.202ZM151.63 25.6007L145.958 17.8323H150.818L154.084 22.6916L157.4 17.8323H162.21L156.457 25.5519L162.519 33.9867H157.757L154.052 28.6236L150.444 33.9867H145.471L151.63 25.6007Z" fill="black" />
                                <path d="M18.8522 14.0132L9.42611 20.0264L18.8522 26.0396L9.42611 32.0528L0 26.0071L9.42611 19.9939L0 14.0132L9.42611 8L18.8522 14.0132ZM9.37735 33.9868L18.8035 27.9736L28.2296 33.9868L18.8035 40L9.37735 33.9868ZM18.8522 26.0071L28.2783 19.9939L18.8522 14.0132L28.2296 8L37.6557 14.0132L28.2296 20.0264L37.6557 26.0396L28.2296 32.0528L18.8522 26.0071Z" fill="#0061FF" />
                            </svg>
                        </li> */}
                        <li className="flex-none">
                            <a href="https://www.instagram.com/sujalvx/" target="_blank"><img width={200} src="https://logospng.org/download/instagram/logo-instagram-4096.png" alt="" /></a>
                        </li>
                        {/* LOGO 2 */}
                        <li className="flex-none">
                            <a href="https://www.linkedin.com/in/sujal-verma-7b5a3a288/" target="_blank"><img width={200} src="https://th.bing.com/th/id/OIP.ET7dA_ENIRNBE7R0WZ04pwHaFH?w=252&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" /></a>
                        </li>

                        {/* LOGO 3 */}
                      
                        <li className="flex-none">
                            <a href="https://github.com/sujalxverma" target="_blank"><img width={200} src="https://th.bing.com/th/id/OIP.yWZoio3kS5aKiTmcHCe7sQAAAA?rs=1&pid=ImgDetMain" alt="" /></a>
                        </li>
                    

                    </ul>
                </div>
            </div>
        </div>
    
            </div>
        </>
    )
}





   