import clsx from "clsx";
import { useTunnels } from "../../context/tunnels";
import "./FooterCenter.scss";
import { useUIAppState } from "../../context/ui-appState";

const FooterCenter = ({ children }: { children?: React.ReactNode }) => {
  const { FooterCenterTunnel } = useTunnels();
  const appState = useUIAppState();
  return (
    <FooterCenterTunnel.In>
      <div
        className={clsx("footer-center zen-mode-transition", {
          "layer-ui__wrapper__footer-left--transition-bottom":
            appState.zenModeEnabled,
        })}
      >
        {children}
      </div>
    </FooterCenterTunnel.In>
    <Link to="https://vksm.odoo.com" target="_blank">Vựa kiểng Sáu Mai</Link>
  );
};

export default FooterCenter;
FooterCenter.displayName = "FooterCenter";
