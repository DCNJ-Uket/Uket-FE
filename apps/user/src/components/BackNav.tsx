import { Link } from "react-router-dom";
import { IconBack } from "@stackflow/plugin-basic-ui";

interface BackNavProps {
  goURL: string;
}

const BackNav = (props: BackNavProps) => {
  const goURL = props.goURL;

  return (
    <nav className="container my-2 flex h-10 w-full items-center justify-between self-stretch">
      <Link to={goURL}>
        <IconBack />
      </Link>
    </nav>
  );
};

export default BackNav;
