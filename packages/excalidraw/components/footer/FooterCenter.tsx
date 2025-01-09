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
      <a href="https://vksm.odoo.com" target="_blank">
      
          <img src="https://raw.githubusercontent.com/leonguyen/download/refs/heads/main/uploads/logo.png" alt="" width="10" height="10" />
          
              Vựa kiểng Sáu Mai
              
                  </a>
    </FooterCenterTunnel.In>

  );
};

export default FooterCenter;
FooterCenter.displayName = "FooterCenter";
