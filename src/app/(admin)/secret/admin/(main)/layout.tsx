import AdminNavs from "@/component/AdminNavs/AdminNavs"
import MainAdminContainer from "@/component/MainAdminContainer/MainAdminContainer"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <MainAdminContainer>
      <AdminNavs />
      {children}
    </MainAdminContainer>
  )
}
