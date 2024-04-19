import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosInstance from "../helper/AxiosInstance";

// Tạo một async thunk để gửi yêu cầu API và xử lý kết quả
export const login = createAsyncThunk(
    'user/login', // Tên của action, khong duoc trung
    async (data, rejectWithValue) => { 
        try {
            const response = await AxiosInstance().post("/users/login", data)
            console.log(response)
            if(response.status == true){
                return response.data
            }
            else{
                return rejectWithValue(error)
            }

        } catch (error) {
            console.log(error)
            // Xử lý lỗi nếu có
            return rejectWithValue(error)
        }
    }
);