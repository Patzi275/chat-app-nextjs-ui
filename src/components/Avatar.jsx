const { default: Image } = require("next/image")

export default function Avatar({ size, ...props }) {
    const _size = size ?? 64;
    const newProps = {
        ...props,
        width: _size,
        height: _size,
        alt: 'profil picture',
        className: props.className + ' avatar'
    };

    return (
        <Image {...newProps} />
    );
}
