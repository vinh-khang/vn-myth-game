// store/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Khởi tạo state cho slice, có thể kèm giá trị mặc định ban đầu
const initialState = {
    userInfo: { isLoggin: false }
};

// Cấu hình slice
export const userSlice = createSlice({
    name: "user",  // Tên của slice, mỗi slice đặt 1 tên khác nhau để phân biệt
    initialState,
    // Reducers chứa các hàm xử lý cập nhật state
    reducers: {
        updateUserInfo: (state, action) => {
            state.userInfo = action.payload;
        },
        // clearResults(state, action) {
        //     // Note that this should be left intentionally empty.
        //     // Clearing redux state and localForage happens in rootReducer.ts.
        // },
    }
})

// Export action ra để sử dụng cho tiện.
export const { updateUserInfo } = userSlice.actions;

// Action là 1 hàm trả về object dạng {type, payload}, chạy thử console.log(updateUsername()) để xem chi tiết

// Hàm giúp lấy ra state mong muốn.
// Hàm này có 1 tham số là root state là toàn bộ state trong store, chạy thử console.log(state) trong nội dung hàm để xem chi tiết
export const selectUserInfo = state => state.user.userInfo;

// Export reducer để nhúng vào Store
export default userSlice.reducer;