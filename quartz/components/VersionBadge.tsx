import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

function getVersionColor(version: string): string {
  const v = version.toLowerCase()
  if (v.includes("alpha")) return "#e74c3c"
  if (v.includes("beta")) return "#f39c12"
  if (v.includes("rc")) return "#3498db"
  return "#27ae60"
}

const VersionBadge: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const version = fileData.frontmatter?.version
  if (version && typeof version === "string") {
    const bgColor = getVersionColor(version)
    return (
      <span
        class={classNames(displayClass, "version-badge")}
        style={`background-color: ${bgColor}`}
      >
        {version}
      </span>
    )
  } else {
    return null
  }
}

VersionBadge.css = `
.version-badge {
  display: inline-block;
  padding: 0.15rem 0.6rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  font-family: var(--codeFont);
  color: #ffffff;
  margin: 0.5rem 0 0 0;
  letter-spacing: 0.02em;
  line-height: 1.4;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
}
`

export default (() => VersionBadge) satisfies QuartzComponentConstructor
