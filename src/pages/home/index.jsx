import Header from "../components/header"
import Footer from "../components/footer"
export default function Home(){
    return(
        <> 
        <Header />
        <main className="flex h-screen"> 
            <div className="flex flex-col w-[741px] bg-amber-100 relative pt-[82px]">
                <div>
                    <video autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover" src="https://d2eiylesx4iyph.cloudfront.net/files/8liimn1h4-web-leftside-rewards-TR-1150x1260px-1-1-SFE.mp4">
                    </video>
                </div>
                <div className="absolute bottom-[40px] left-[40px] text-3xl font-semibold">
                    Günaydın  ☀️
                </div>
                
            </div>

            <div className="flex-1 pt-[95px]  px-[40px] ml-5 overflow-auto">
                <div>
                    <img src="https://core.rtbs.io/user/action/cc1eec01745b4c0ba29d63b1fe7e6ccf/rbs.storage.get.GET_IMAGE?auth=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGl0eSI6InJic19hbm9ueW1vdXNfdXNlciIsImFub255bW91cyI6dHJ1ZSwicHJvamVjdElkIjoiY2MxZWVjMDE3NDViNGMwYmEyOWQ2M2IxZmU3ZTZjY2YiLCJ1c2VySWQiOiJhbm9ueW1vdXNfNGRmODc5N2U3OTBkNGEwMmJkNWYzNTI0NDg5MDVmZGIiLCJ0aW1lc3RhbXAiOjE3Mzk5NDM4ODU3MzQsImNsYWltcyI6e30sImlhdCI6MTczOTk0Mzg4NSwiZXhwIjoxNzM5OTQ0MTg1LCJpc3MiOiJjb3JlLnJ0YnMuaW8ifQ.qt2H9QSgqrg92AyhGbBrHAS-Kmz4tGOKCdsjMryJKWw&data=eyJpbWFnZUlkIjoiMzA1NjQzZDQtYWE2NS00ZmVkLTliYzktMjliODhlNTVkMGQ1IiwiZml0IjoiY292ZXIifQ&culture=en-US&platform=WEB&" alt="" />
                </div>
                <div>
                    <h4>Yeni, fıstık gibi! 😎❄️</h4>
                    <p>Fıstık aromalı yeni içeceklerimizle tanış: Pistachio ailesi! 💚 İster sıcak Latte’ler, ister soğuk köpüklü alternatiflerle fıstık gibi bir kış seni bekliyor! Ee, ne zaman buluşuyoruz? 🙂</p>
                    <div>
                        <button className="p-2 bg-[#008248] text-white font-semibold border-1 rounded-2xl">GetirYemek</button>
                        <button>YemekSepeti</button>
                    </div>
                </div>
            </div>
        </main>  
        <Footer/>
        </>
    )
}