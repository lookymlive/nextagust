export default function Layout({
  children,
  chat,
  analytics,
  video,
}: {
  children: React.ReactNode
  video: React.ReactNode
  analytics: React.ReactNode
chat: React.ReactNode
}) {
  return (
    <>
      {children}
      {chat}
      {analytics}
      {video}
    </>
  )
}