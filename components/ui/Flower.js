/**
 * Flower — the Suviro company logo.
 *
 * Reused across the site (navbar, hero backgrounds, badge, footer).
 *
 * Props:
 *   size    – px (number)                  default 52
 *   opacity – logo opacity (number)        default 1
 *   spin    – animate rotation (boolean)   default false
 *   spinDuration – seconds (number)        default 30
 *   reverse – spin counter-clockwise       default false
 *   className – extra classes (string)
 *   style   – inline style override
 */

export default function Flower({
  size = 52,
  opacity = 1,
  spin = false,
  spinDuration = 30,
  reverse = false,
  className = '',
  style = {},
}) {
  const spinStyle = spin
    ? {
        animation: `spin ${spinDuration}s linear infinite${reverse ? ' reverse' : ''}`,
      }
    : {}

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/suviro.png"
      alt="Suviro"
      width={size}
      height={size}
      aria-hidden="true"
      className={className}
      style={{
        display: 'block',
        width: size,
        height: size,
        objectFit: 'contain',
        borderRadius: '50%',
        opacity,
        ...spinStyle,
        ...style,
      }}
    />
  )
}
