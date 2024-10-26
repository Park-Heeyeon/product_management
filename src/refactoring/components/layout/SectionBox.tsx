interface Props {
  title: String;
  children: React.ReactNode;
}
const SectionBox = ({ title, children }: Props) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      {children}
    </div>
  );
};
export default SectionBox;
