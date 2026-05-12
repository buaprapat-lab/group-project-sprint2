// ป็นหน้าจอรับค่า พอรับค่าเสร็จ มันก็เอาไปเทียบกับไฟล์ usersInfo ตรงๆ
// ถ้าเจอและรหัสถูก ก็เอาข้อมูลยูสเซอร์ไปใส่ในกล่องเก็บ setMyUserInfo

import { useContext, useState } from "react";
import { UserContext } from "../context/userContext/UserContext";
import { useNavigate, Link } from "react-router-dom";
import { loginAPI } from "../services/authService"; // Import ตัวจำลอง API มา

export default function Login() {
  const navigate = useNavigate();
  const { myUserInfo, setMyUserInfo } = useContext(UserContext);

  const [loginText, setLoginText] = useState("");
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false); // เพิ่ม State โหลดดิ้ง

  // เปลี่ยนฟังก์ชันเป็น async
  const checkLogin = async (e) => {
    e.preventDefault(); // ป้องกันฟอร์มรีเฟรชหน้าเว็บ (สำคัญมาก!)
    setIsLoading(true);
    setLoginText("");

    try {
      // เรียกใช้ Mock API
      const user = await loginAPI(inputUsername, inputPassword);

      setMyUserInfo(user);

      // เตะไปหน้าต่างๆ ตาม Role
      if (user.role === "customer") {
        navigate("/menu");
      } else if (user.role === "cook") {
        navigate("/cookBoard");
      } else if (user.role === "rider") {
        navigate("/riderBoard");
      }
    } catch (error) {
      // จับ Error ที่โยนมาจาก authService
      setLoginText(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const logoutBtn = (e) => {
    e.preventDefault();
    setMyUserInfo(null); // ใช้ null ดีกว่า "" สำหรับ Object
  };

  return (
    <div className="flex flex-col min-w-full bg-secondary">
      {!myUserInfo ? (
        <form
          onSubmit={checkLogin}
          className="flex flex-col justify-evenly items-center content-evenly min-h-[80vh] m-[10vh] bg-neutral"
        >
          <h1 className="text-2xl font-bold mb-4">Login</h1>

          <span className="font-bold">
            Username :
            <input
              className="border"
              value={inputUsername}
              onChange={(e) => setInputUsername(e.target.value)}
              type="text"
            />
          </span>
          <span className="font-bold">
            Password :
            <input
              className="border"
              value={inputPassword}
              onChange={(e) => setInputPassword(e.target.value)}
              type="password"
            />
          </span>

          <button
            type="submit"
            disabled={isLoading}
            className="w-[20vh] bg-secondary hover:bg-accent text-neutral px-6 py-2 rounded-lg font-semibold transition duration-300 cursor-pointer disabled:opacity-50"
          >
            {isLoading ? "กำลังเข้าสู่ระบบ..." : "Submit"}
          </button>

          <span className="text-red-500 font-bold">{loginText}</span>
          <span className="hover:text-secondary text-blue-500 font-bold">
            <Link to="/register">
              don't have account? click here to register
            </Link>
          </span>
        </form>
      ) : (
        <form
          onSubmit={logoutBtn}
          className="flex flex-col justify-evenly items-center content-evenly min-h-[80vh] m-[10vh] bg-neutral"
        >
          <h1 className="text-2xl font-bold mb-4">You're Logged In</h1>
          <span className="flex flex-row font-bold">
            Role :{" "}
            <h2 className="text-secondary text-xl ml-2">{myUserInfo.role}</h2>
          </span>
          <span className="flex flex-row font-bold">
            Name :{" "}
            <h2 className="text-secondary text-xl ml-2">{myUserInfo.name}</h2>
          </span>
          <button
            type="submit"
            className="w-[20vh] bg-red-500 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition duration-300 cursor-pointer"
          >
            Logout
          </button>
        </form>
      )}
    </div>
  );
}
