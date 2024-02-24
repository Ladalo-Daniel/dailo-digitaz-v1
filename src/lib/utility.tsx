import React from "react"
import { Book, BookAIcon, BookCheckIcon, BookIcon, Bookmark, BookmarkCheck, Building2, CircuitBoard, LayoutDashboardIcon, LucideUsers2, Medal, Plus, PodcastIcon, Settings, Settings2, Sparkle, User, User2, Users, Users2Icon } from 'lucide-react'
import { getProfile } from "../../supabase/user"

async function hideRolesRoute() {
  const profile = await getProfile()
  return profile
}

export const side_bar_links: {
    href: string,
    icon: React.JSX.Element,
    activeIcon?: React.JSX.Element,
    tooltip: string,
    hidden?: boolean
  }[] = [
    {
      href: "/dashboard",
      icon: <LayoutDashboardIcon size={18}/>,
      activeIcon: <LayoutDashboardIcon size={18} />,
      tooltip: "Dashboard",
    },
    {
      href: "/dashboard/cart",
      icon: <PodcastIcon size={18}/>,
      activeIcon: <PodcastIcon size={18} />,
      tooltip: "Cart",
    },
    {
      href: "/dashboard/products",
      icon: <User size={18} />,
      activeIcon: <User2 size={18} />,
      tooltip: "Products",
    },
    {
      href: "/dashboard/brands",
      icon: <Building2 size={18} />,
      activeIcon: <Building2 size={18} />,
      tooltip: "Brands",
    },
    {
      href: "/dashboard/orders",
      icon: <BookIcon size={18} />,
      activeIcon: <BookIcon size={18} />,
      tooltip: "Orders",
      hidden: true
    },
    {
      href: "/dashboard/add-product",
      icon: <Sparkle className="animate-spin" size={18} />,
      activeIcon: <Sparkle size={18} />,
      tooltip: "Add Product",
    },
    {
      href: "/dashboard/search",
      icon: <BookCheckIcon size={18} />,
      activeIcon: <BookCheckIcon size={18} />,
      tooltip: "Search",
    },
    {
      href: "/dashboard/bookmarks",
      icon: <Bookmark size={18} />,
      activeIcon: <BookmarkCheck size={18} />,
      tooltip: "Bookmarks",
    },
    {
      href: "/dashboard/settings",
      icon: <Settings2 size={18}/>,
      activeIcon: <Settings2 size={18} />,
      tooltip: "Settings",
    },
    {
      href: "/dashboard/learn",
      icon: <CircuitBoard size={18}/>,
      tooltip: "Learn",
    },
    {
      href: "/dashboard/scholarships",
      icon: <Medal size={18}/>,
      tooltip: "Scholarships",
    },
    {
      href: "/dashboard/students",
      icon: <LucideUsers2 size={18} />,
      activeIcon: <Users2Icon size={18} />,
      tooltip: "Students",
      hidden: true
    },
    {
      href: "/dashboard/teachers",
      icon: <Users2Icon size={18} />,
      activeIcon: <Users2Icon size={18} />,
      tooltip: "Teachers",
      hidden: true,
    },
    {
      href: "/dashboard/community",
      icon: <Users2Icon size={18} />,
      activeIcon: <Users2Icon size={18} />,
      tooltip: "Community",
      hidden: true
    },
    {
      href: "/dashboard/create-article",
      icon: <Plus size={18} />,
      tooltip: "Create Article",
      hidden: true
    },
    {
      href: "/articles",
      icon: <Book size={18} />,
      tooltip: "Articles",
    },
    {
      href: "/dashboard/articles",
      icon: <BookAIcon size={18} />,
      tooltip: "Articles (admin)",
      hidden: true
    },
  ]
  