import iconInstagram from "@/assets/images/icon-instagram.png";
import iconWhatsapp from "@/assets/images/icon-whatsapp.png";
import iconTiktok from "@/assets/images/icon-tiktok.png";
import iconFacebook from "@/assets/images/icon-facebook.png";

const socialLinks = [
  { href: "#", icon: iconInstagram, name: "instagram" },
  { href: "#", icon: iconWhatsapp, name: "whatsapp" },
  { href: "#", icon: iconTiktok, name: "tiktok" },
  { href: "#", icon: iconFacebook, name: "facebook" },
];

export const SocialLinks = () => {
  return (
    <div>
      <p className="mb-4 text-xl font-medium text-surface-alt">Redes Sociais</p>
      <ul className="flex gap-5">
        {socialLinks.map(({ href, icon, name }) => (
          <li key={name}>
            <a href={href} aria-label={name}>
              <img src={icon} alt={name} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
