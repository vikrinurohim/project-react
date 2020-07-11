import React, { useEffect } from 'react';
import {FaUserEdit} from "react-icons/fa";
class Home extends React.Component {
    render() {
        return (
         <>
            <br></br>
             {/* contoh artikel */}
            <h1 style={{textAlign:"center"}}>Berkurangnya Penggunaan Bahasa Daerah</h1>
            <p style={{textIndent:"20px"}}>    Menurut data kementerian pendidikan dan kebudayaan bahwa "bahasa daerah di indonesia  ada sekitar 652 bahasa".
                Di era globalisasi ketika masyarakat mengedepankan bahasa nasional dan bahasa asing dikarenakan kebutuhan komunikasi dalam bisnis dan urusan lainnya, penggunaan bahasa daerah seperti bahasa daerah  mulai menurun. Dikhawatirkan bahwa bahasa daerah akan semakin sedikit jumlah penuturnya.
                Ada beberapa kemungkinan penyebab yang membuat penutur asli bahasa daerah semakin sedikit; hal yang menurut saya bisa menjadi penyebab berkurangnya penutur bahasa asli daerah. Yang pertama adalah banyaknya variasi dialek yang membuat ketidakpahaman sesama penutur yang menganut dialek berbeda sehingga timbullah keengganan dalam menggunakan bahasa daerah. Pada akhirnya mereka lebih memilih untuk menggunakan bahasa nasional untuk menjembatani kesulitan tersebut.
                Dominasi penggunaan bahasa Indonesia sehingga tergesernya penggunaan bahasa asli daerah tersebut saya rasa tidak hanya terjadi di daerah tertentu. Hal tersebut dikarenakan desakan kebutuhan dan kepraktisan dalam berkomunikasi pada ranah bisnis, pendidikan, maupun sektor lainnya.Pelestarian bahasa sebagai salah unsur dari budaya tentu bukanlah hal yang mudah apalagi hal ini menyangkut banyak orang dengan jenis komunikasi yang berbeda-beda. Penyebab-penyebab mulai terancamnya bahasa daerah, tidak luput dari peran semua pihak. Oleh karena itu, dibutuhkan peran dan partisipasi dari banyak pihak juga untuk melestarikannya.
                Menurut penulis,seharusnya pemerintah daerah mengadakan program pelestarian bahasa lebih ditekankan lagi kemudian disekolah juga harus lebih ditingkatkan lagi,karena penulis  berasal dari sekolah yang mengadakan program kamis nyunda (Jawa Barat) dirasa kurang efektif karena masih banyak siswa begitu pula gurunya menggunakan bahasa indonesia.Ya memang  murid sekolah tersebut ada yang dari kecil berbicaranya bahasa indoenesa saja tapi setidaknya belajar sedikit sedikit.Jadi,untuk melaksanakan program tersebut dibutukan kerja sama antara sekolah dan pemerintah.
                Masa bahasa daerah sendiri jarang dipakai sedangkan bahasa indonesia sering dipakai.Memang bahasa indonesia itu bahasa nasional kita tetapi bahasa daerah juga penting karena indonesia itu terkenal tentang keberagaman bahasa,julukan tersebut tidak akan berlaku kalau bahasa daerah jarang digunakan sehingga lama-kelamaan akan punah.
                Itu merupakan murni pendapat penulis.......</p>
            {/* penulis */}
            <div className="penulis cf">
                <FaUserEdit  className="user" size="8rem" color="lightblue" /> 
                <p style={{fontFamily:"fertigo"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>               
            </div>
            {/* footer */}
            <div className="footer">
                        <ul className="ul">
                            <li>Tentang Kami</li>
                            <br></br>
                            <li>FAQ</li>
                        </ul><br></br>
                        <p>Copyright@anonim2020</p>
                    </div>
           
         </>
        )
    }
}
export default Home