interface Props {
  subTitle?: string;
  children: React.ReactNode;
}
const SubSection = ({ subTitle, children }: Props) => {
  return (
    <div className="mt-6 bg-white p-4 rounded shadow">
      {subTitle && <h2 className="text-2xl font-semibold mb-2">{subTitle}</h2>}
      {children}
    </div>
  );
};
export default SubSection;
