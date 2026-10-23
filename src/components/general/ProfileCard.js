import Image from "next/image";
import { FiArrowRight, FiUser, FiUserPlus } from "react-icons/fi";

const variants = {
  teacher: {
    card: "border-slate-200 bg-white hover:shadow-lg",
    icon: "bg-slate-100 text-slate-600",
    description: "text-slate-600",
    Icon: FiUser,
  },
  student: {
    card: "border-violet-300 bg-violet-50 hover:border-violet-500 hover:bg-violet-100",
    icon: "bg-violet-200 text-violet-900",
    description: "font-medium text-violet-800",
    Icon: FiUserPlus,
  },
};

export default function ProfileCard({
  href,
  name,
  description,
  image,
  variant = "student",
}) {
  const styles = variants[variant] ?? variants.student;
  const { Icon } = styles;

  return (
    <a
      href={href}
      className={`group flex items-center gap-4 rounded-3xl border p-5 shadow-sm transition hover:-translate-y-1 ${styles.card}`}
    >
      {image ? (
        <Image
          src={image}
          alt=""
          width={56}
          height={56}
          className="h-14 w-14 shrink-0 rounded-2xl object-cover"
        />
      ) : (
        <span
          className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${styles.icon}`}
        >
          <Icon aria-hidden="true" size={24} />
        </span>
      )}
      <span className="min-w-0">
        <span className="block truncate font-bold">{name}</span>
        <span className={`mt-1 block text-sm ${styles.description}`}>
          {description}
        </span>
      </span>
      <FiArrowRight
        aria-hidden="true"
        className="ml-auto shrink-0 transition group-hover:translate-x-1"
      />
    </a>
  );
}
