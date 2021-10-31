import React from 'react'
import Image from 'next/dist/client/image'
import classNames from 'classnames';
import Link from 'next/link'

interface MenuItemProps {
    title: string
    href: string
    active?: boolean
    icon: "icon-card" | "icon-logout" | "icon-messages" | "icon-overview" | "icon-rewards" | "icon-settings" | "icon-transactions"
}
export default function MenuItem(props: Partial<MenuItemProps>) {
    const { title, icon, active, href } = props;
    const classItem = classNames({
        'item': true,
        'mb-30': true,
        'active': active
    })
    return (
        <div className={classItem}>
            <div className="me-3">
                <Image src={`/icon/${icon}.svg`} width={25} height={25} />
            </div>
            <p className="item-title m-0">
                <Link href={`${href}`}>
                    <a className="text-lg text-decoration-none">{title}</a>
                </Link>
            </p>
        </div>
    )
}
