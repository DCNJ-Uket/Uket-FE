import { createPortal } from "react-dom";

const spriteSVGCode = (
  <svg xmlns="http://www.w3.org/2000/svg" className="hidden">
    <symbol id="univ_user" viewBox="0 0 119 100">
      <g>
        <path
          d="M86.4497 64.4058H33.4709C15.5432 64.4058 0.966492 78.949 0.966492 96.9102V111.487C0.966492 112.861 2.10582 114 3.47972 114H116.407C117.781 114 118.921 112.861 118.921 111.487V96.9102C118.921 79.0495 104.31 64.4058 86.4162 64.4058H86.4497Z"
          fill="currentColor"
        />
        <path
          d="M100.356 0H19.5644C18.09 0 16.8836 1.20635 16.8836 2.68078C16.8836 4.1552 18.09 5.36155 19.5644 5.36155H33.873V30.3933C34.1411 46.5785 45.702 58.5414 59.9436 58.5414C74.1852 58.5414 85.746 46.612 86.0141 30.3933V5.36155H91.3422V16.5538C91.3422 18.0282 92.5485 19.2346 94.0229 19.2346C95.4974 19.2346 96.7037 18.0282 96.7037 16.5538V5.36155H100.323C101.797 5.36155 103.004 4.1552 103.004 2.68078C103.004 1.20635 101.797 0 100.323 0H100.356ZM59.9436 53.1799C48.4833 53.1799 39.5027 43.2275 39.2346 30.3933H80.6526C80.418 43.194 71.4039 53.1799 59.9436 53.1799Z"
          fill="currentColor"
        />
      </g>
    </symbol>
    <symbol id="default_user" viewBox="0 0 123 100">
      <g>
        <path
          d="M61.8738 0C44.8223 0 34.9648 10.1687 34.9648 27.1511C34.9648 44.1335 47.0358 56.7579 61.8738 56.7579C76.7118 56.7579 88.7828 44.1681 88.7828 27.1511C88.7828 10.1341 78.8562 0 61.8738 0ZM40.4988 27.1511C40.4988 13.2124 48.1081 5.53398 61.8738 5.53398C75.6396 5.53398 83.2488 13.2124 83.2488 27.1511C83.2488 41.0898 73.8411 51.2239 61.8738 51.2239C49.9066 51.2239 40.4988 40.6402 40.4988 27.1511Z"
          fill="currentColor"
        />
        <path
          d="M89.1979 62.8452H34.5152C16.011 62.8452 0.965454 77.8561 0.965454 96.395V111.44C0.965454 112.859 2.14143 114.035 3.55951 114.035H120.119C121.537 114.035 122.713 112.859 122.713 111.44V96.395C122.713 77.9599 107.633 62.8452 89.1633 62.8452H89.1979Z"
          fill="currentColor"
        />
      </g>
    </symbol>
  </svg>
);

const SVGProvider = () => {
  return createPortal(spriteSVGCode, document.body);
};

export default SVGProvider;
