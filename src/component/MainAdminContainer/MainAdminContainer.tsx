interface MainAdminContainerProps{
  children: React.ReactNode
}

export default function MainAdminContainer({children}:MainAdminContainerProps){
  return(
    <main>
      {children}
    </main>
  )
}