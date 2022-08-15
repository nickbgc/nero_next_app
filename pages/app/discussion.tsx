import SidebarLayout from 'layouts/SidebarLayout';

export default function Discussion() {
  return (
    <SidebarLayout title={'Discussion'}>
      <div className="px-8">
        <img
          className="w-full h-auto"
          src="/discussion.jpeg"
          alt="discussion"
        />
      </div>
    </SidebarLayout>
  );
}
