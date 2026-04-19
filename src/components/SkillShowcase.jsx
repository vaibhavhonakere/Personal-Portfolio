import { FaAws, FaCss3Alt, FaHtml5, FaJava } from "react-icons/fa6";
import { LuBrainCircuit, LuCloudCog, LuDatabaseZap, LuLayoutPanelTop, LuWorkflow } from "react-icons/lu";
import {
  SiC,
  SiCplusplus,
  SiDjango,
  SiDocker,
  SiEspressif,
  SiFalcon,
  SiFastapi,
  SiFlask,
  SiGo,
  SiGit,
  SiGitlab,
  SiGnubash,
  SiGooglecloud,
  SiHuggingface,
  SiJavascript,
  SiJquery,
  SiJunit5,
  SiKubernetes,
  SiLinux,
  SiMeta,
  SiMongodb,
  SiMockserviceworker,
  SiNodedotjs,
  SiNumpy,
  SiOpenai,
  SiPostgresql,
  SiPulumi,
  SiPython,
  SiReact,
  SiTerraform,
  SiTypescript,
} from "react-icons/si";
import { TbApi, TbBrandReactNative, TbDatabase, TbDeviceDesktopCode } from "react-icons/tb";

const skillVisuals = {
  JavaScript: { Icon: SiJavascript, color: "#f7df1e", bg: "rgba(247, 223, 30, 0.14)" },
  Python: { Icon: SiPython, color: "#3776ab", bg: "rgba(55, 118, 171, 0.14)" },
  TypeScript: { Icon: SiTypescript, color: "#3178c6", bg: "rgba(49, 120, 198, 0.14)" },
  Java: { Icon: FaJava, color: "#f89820", bg: "rgba(248, 152, 32, 0.14)" },
  Go: { Icon: SiGo, color: "#00add8", bg: "rgba(0, 173, 216, 0.14)" },
  C: { Icon: SiC, color: "#a8b9cc", bg: "rgba(168, 185, 204, 0.16)" },
  "C++": { Icon: SiCplusplus, color: "#00599c", bg: "rgba(0, 89, 156, 0.16)" },
  SQL: { Icon: TbDatabase, color: "#7e8ea3", bg: "rgba(126, 142, 163, 0.16)" },
  Bash: { Icon: SiGnubash, color: "#4eaa25", bg: "rgba(78, 170, 37, 0.16)" },
  AWS: { Icon: FaAws, color: "#ff9900", bg: "rgba(255, 153, 0, 0.14)" },
  EC2: { Icon: FaAws, color: "#ff9900", bg: "rgba(255, 153, 0, 0.14)" },
  SageMaker: { Icon: FaAws, color: "#ff9900", bg: "rgba(255, 153, 0, 0.14)" },
  "Google Cloud": { Icon: SiGooglecloud, color: "#4285f4", bg: "rgba(66, 133, 244, 0.14)" },
  React: { Icon: SiReact, color: "#61dafb", bg: "rgba(97, 218, 251, 0.14)" },
  "React Native": { Icon: TbBrandReactNative, color: "#61dafb", bg: "rgba(97, 218, 251, 0.14)" },
  HTML5: { Icon: FaHtml5, color: "#e34f26", bg: "rgba(227, 79, 38, 0.14)" },
  CSS3: { Icon: FaCss3Alt, color: "#1572b6", bg: "rgba(21, 114, 182, 0.14)" },
  jQuery: { Icon: SiJquery, color: "#0769ad", bg: "rgba(7, 105, 173, 0.14)" },
  "Responsive UI": { Icon: LuLayoutPanelTop, color: "#96e5cf", bg: "rgba(150, 229, 207, 0.14)" },
  "Node.js": { Icon: SiNodedotjs, color: "#339933", bg: "rgba(51, 153, 51, 0.14)" },
  Flask: { Icon: SiFlask, color: "#f5f7f4", bg: "rgba(245, 247, 244, 0.1)" },
  "Fast API": { Icon: SiFastapi, color: "#009688", bg: "rgba(0, 150, 136, 0.14)" },
  Django: { Icon: SiDjango, color: "#44b78b", bg: "rgba(68, 183, 139, 0.14)" },
  PostgreSQL: { Icon: SiPostgresql, color: "#4169e1", bg: "rgba(65, 105, 225, 0.14)" },
  MongoDB: { Icon: SiMongodb, color: "#47a248", bg: "rgba(71, 162, 72, 0.14)" },
  "REST APIs": { Icon: TbApi, color: "#8bdcff", bg: "rgba(139, 220, 255, 0.14)" },
  "Secrets Manager": { Icon: LuCloudCog, color: "#ffb86c", bg: "rgba(255, 184, 108, 0.14)" },
  NumPy: { Icon: SiNumpy, color: "#4d77cf", bg: "rgba(77, 119, 207, 0.14)" },
  "GPT": { Icon: SiOpenai, color: "#10a37f", bg: "rgba(16, 163, 127, 0.14)" },
  Llama: { Icon: SiMeta, color: "#0a66ff", bg: "rgba(10, 102, 255, 0.14)" },
  "Falcon 40B": { Icon: SiFalcon, color: "#bba4ff", bg: "rgba(187, 164, 255, 0.14)" },
  "Hugging Face": { Icon: SiHuggingface, color: "#ffd21e", bg: "rgba(255, 210, 30, 0.14)" },
  "Prompt Engineering": { Icon: LuBrainCircuit, color: "#ffb86c", bg: "rgba(255, 184, 108, 0.14)" },
  "Vector Databases": { Icon: LuDatabaseZap, color: "#8be28b", bg: "rgba(139, 226, 139, 0.14)" },
  Docker: { Icon: SiDocker, color: "#2496ed", bg: "rgba(36, 150, 237, 0.14)" },
  Kubernetes: { Icon: SiKubernetes, color: "#326ce5", bg: "rgba(50, 108, 229, 0.14)" },
  Linux: { Icon: SiLinux, color: "#fcc624", bg: "rgba(252, 198, 36, 0.14)" },
  Terraform: { Icon: SiTerraform, color: "#844fba", bg: "rgba(132, 79, 186, 0.14)" },
  Pulumi: { Icon: SiPulumi, color: "#8a3391", bg: "rgba(138, 51, 145, 0.14)" },
  Git: { Icon: SiGit, color: "#f05032", bg: "rgba(240, 80, 50, 0.14)" },
  GitLab: { Icon: SiGitlab, color: "#fc6d26", bg: "rgba(252, 109, 38, 0.14)" },
  "VS Code": { Icon: TbDeviceDesktopCode, color: "#007acc", bg: "rgba(0, 122, 204, 0.14)" },
  JUnit: { Icon: SiJunit5, color: "#25a162", bg: "rgba(37, 161, 98, 0.14)" },
  Mockito: { Icon: SiMockserviceworker, color: "#ff6a3d", bg: "rgba(255, 106, 61, 0.14)" },
  ESP32: { Icon: SiEspressif, color: "#e7352c", bg: "rgba(231, 53, 44, 0.14)" },
  "Automation Workflows": { Icon: LuWorkflow, color: "#96e5cf", bg: "rgba(150, 229, 207, 0.14)" },
};

export function SkillShowcase({ intro, skillGroups }) {
  return (
    <div className="skill-showcase">
      <div className="skill-showcase-intro">
        {intro ? <p>{intro}</p> : null}
      </div>

      <div className="skill-category-list">
        {skillGroups.map((group) => (
          <section key={group.label} className="skill-category">
            <h3 className="skill-category-title">{group.label}</h3>
            <div className="skill-tile-grid">
              {group.items.map((item) => {
                const visual = skillVisuals[item.name];
                const Icon = visual?.Icon;

                return (
                  <article key={`${group.label}-${item.name}`} className="skill-tile card">
                    <div
                      className="skill-symbol"
                      aria-hidden="true"
                      style={{
                        "--skill-color": visual?.color ?? "#96e5cf",
                        "--skill-bg": visual?.bg ?? "rgba(150, 229, 207, 0.14)",
                      }}
                    >
                      {Icon ? <Icon /> : item.symbol}
                    </div>
                    <p className="skill-name">{item.name}</p>
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
