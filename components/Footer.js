import siteConfig from "@/config/site.config.json";
import subscription from "@/config/subscription.json";
import { IconUserPlus } from "@tabler/icons";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="section">
        </div>
        <div className="pb-5">
          <div className="row">
            <div className="col-lg-12 text-center">
              <p className="mb-0 copyright-text content">
                {siteConfig.copyright}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
