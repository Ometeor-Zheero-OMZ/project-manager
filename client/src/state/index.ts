import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// 初期状態の型定義
export interface initialStateTypes {
  isSidebarCollapsed: boolean;
  isDarkMode: boolean;
}

// 初期状態を定義
const initialState: initialStateTypes = {
  isSidebarCollapsed: false,
  isDarkMode: false,
};

// スライスを作成
export const globalSlice = createSlice({
  name: "global", // スライス名
  initialState, // 初期状態を指定
  reducers: {
    // サイドバーの折りたたみ状態を更新するアクション
    setIsSidebarCollapsed: (state, action: PayloadAction<boolean>) => {
      state.isSidebarCollapsed = action.payload;
    },
    // ダークモード状態を更新するアクション
    setIsDarkMode: (state, action: PayloadAction<boolean>) => {
      state.isDarkMode = action.payload;
    },
  },
});

// 作成したアクションをエクスポート
export const { setIsSidebarCollapsed, setIsDarkMode } = globalSlice.actions;

// Reducerをエクスポートしてストアで利用可能にする
export default globalSlice.reducer;
