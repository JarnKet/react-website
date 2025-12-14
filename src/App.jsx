// 1. ສ່ວນຂອງ import
import React from "react";
import MarketItemApp from "./components/MarketItemApp";
import PreviewData from "./components/PreviewData";
import AutoFocusInput from "./components/AutoFocusInput";

import { Routes, Route } from "react-router";

// Layout
import MainLayout from "./components/MainLayout";

// ໜ້າຕ່າງໆ
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";
import PostListPage from "./pages/PostListPage";
import PostDetailPage from "./pages/PostDetailPage";
import UserListPage from "./pages/UserListPage";
import UserDetailPage from "./pages/UserDetailPage";
import PostNewPage from "./pages/PostNewPage";

const App = () => {
  // 2. ສ່ວນຂອງ Logic

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/posts" element={<PostListPage />} />
        <Route path="/posts/:postId" element={<PostDetailPage />} />
        <Route path="/posts/new" element={<PostNewPage />} />
        <Route path="/users" element={<UserListPage />} />
        <Route path="/users/:userId" element={<UserDetailPage />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

// 4. ສ່ວນຂອງ export
export default App;
