// จำลองการเรียก API ขึ้นมาคั่นกลาง เวลาย้ายไปใช้ B/E จะได้แก้แค่ไฟล์นี้ไฟล์เดียว

import { usersInfo } from "../assets/usersInfo";

export const loginAPI = async (username, password) => {
  // จำลองความหน่วงของเน็ต 1 วินาที (1000 ms)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = usersInfo.find(
        (u) => u.username === username && u.password === password,
      );

      if (user) {
        resolve(user); // ถ้าเจอ user ให้ส่งข้อมูลกลับไป
      } else {
        reject(new Error("Username and/or Password is not correct.")); // ถ้าไม่เจอให้โยน Error
      }
    }, 1000);
  });
};
