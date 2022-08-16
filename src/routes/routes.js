import Login from "../features/pages/auth/Login/Login";
import Register from "../features/pages/auth/Register/Register";
import Home from "../features/pages/Home/Home";

import AdminPage from "../features/pages/Accounts/AdminPage/AdminPage";
import ProductTable from "../features/pages/Accounts/AdminPage/ProductTable/ProductTable";
import UserTable from "../features/pages/Accounts/AdminPage/UserTable/UserTable";
import UserPage from "../features/pages/Accounts/UserPage/UserPage";
import AuthLogin from "../features/pages/auth/AuthGuard/AuthLogin";
import RoleBasedGuard from "../features/pages/auth/AuthGuard/RoleBaseGuard";
import SearchPage from "../features/pages/Search";
import DefaultLayout from "../layout/DefaultLayout";
import MainLayout from "../layout/mainLayout";
import CatelogiesTable from "../features/pages/Accounts/AdminPage/CatelogiesTable";
import ProductPages from "../features/pages/Product/ProductPages";
import ProductDetails from "../features/pages/ProductDetails/ProductDetails";
import Checkout from "../features/pages/Checkout/Checkout";
import Verify from "../features/pages/auth/Verify/Verify";
import CheckoutSuccess from "../features/pages/Checkout/CheckoutSuccess";

const publicRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      // product
      {
        path: "/dien-thoai",
        element: <DefaultLayout />,
        children: [
          {
            path: "/dien-thoai",
            element: (
              <ProductPages nameProduct="Điện thoại" pathName="dien-thoai" />
            ),
          },
          {
            path: "/dien-thoai/:id",
            element: (
              <ProductDetails nameProduct="Điện thoại" pathName="dien-thoai" />
            ),
          },
        ],
      },
      {
        path: "/may-tinh-bang",
        element: <DefaultLayout />,

        children: [
          {
            path: "/may-tinh-bang",

            element: (
              <ProductPages
                nameProduct="Máy tính bảng"
                pathName="may-tinh-bang"
              />
            ),
          },
          {
            path: "/may-tinh-bang/:id",
            element: (
              <ProductDetails
                nameProduct="Máy tính bảng"
                pathName="may-tinh-bang"
              />
            ),
          },
        ],
      },
      {
        path: "/laptop",
        element: <DefaultLayout />,
        children: [
          {
            path: "/laptop",
            element: <ProductPages nameProduct="Laptop" pathName="laptop" />,
          },
          {
            path: "/laptop/:id",
            element: <ProductDetails nameProduct="Laptop" pathName="laptop" />,
          },
        ],
      },
      {
        path: "/desktop",
        element: <DefaultLayout />,
        children: [
          {
            path: "/desktop",
            element: <ProductPages nameProduct="Desktop" pathName="desktops" />,
          },
          {
            path: "/desktop/:id",
            element: (
              <ProductDetails nameProduct="Desktop" pathName="desktops" />
            ),
          },
        ],
      },
      {
        path: "/phu-kien",
        element: <DefaultLayout />,
        children: [
          {
            path: "/phu-kien",
            element: (
              <ProductPages nameProduct="Phụ kiện" pathName="phu-kien" />
            ),
          },
          {
            path: "/phu-kien/:id",
            element: (
              <ProductDetails nameProduct="Phụ kiện" pathName="phu-kien" />
            ),
          },
        ],
      },
      // Check out order
      {
        path: "/checkout",
        element: <DefaultLayout />,
        children : [
          {
            path: "/checkout",
            element: <Checkout />,
          },
          {
            path: "/checkout/success",
            element: <CheckoutSuccess />,
          },
        ]
      },
      {
        path: "/tim-kiem",
        element: <SearchPage />,
      },
    ],
  },
  
  {
    path: "/login",
    element: (
      <AuthLogin>
        <Login />
      </AuthLogin>
    ),
  },

  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/user/verify",
    element: <Verify />,
  },
  {
    path: "/accounts",
    element: <DefaultLayout />,
    children: [
      {
        path: "admin",
        element: (
          <RoleBasedGuard>
            <AdminPage />
          </RoleBasedGuard>
        ),
        children: [
          {
            path: "users",
            element: <UserTable />,
          },
          {
            path: "dien-thoai",
            element: <ProductTable nameTable="dien-thoai" />,
          },
          {
            path: "may-tinh-bang",
            element: <ProductTable nameTable="may-tinh-bang" />,
          },
          {
            path: "desktop",
            element: <ProductTable nameTable="desktops" />,
          },
          {
            path: "laptop",
            element: <ProductTable nameTable="laptop" />,
          },
          {
            path: "phu-kien",
            element: <ProductTable nameTable="phu-kien" />,
          },
          {
            path: "catelogies",
            element: <CatelogiesTable />,
          },
        ],
      },
      {
        path: "user",
        element: <UserPage />,
      },
    ],
  },
];

export default publicRoutes;
