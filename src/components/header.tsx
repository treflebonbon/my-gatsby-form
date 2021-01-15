import React, { FC } from 'react'
import { Link } from 'gatsby'
import tw from 'twin.macro'

type HeaderProps = {
  siteTitle?: string
}

const Header: FC<HeaderProps> = ({ siteTitle = '' }) => (
  <header css={tw`bg-indigo-700 mb-1`}>
    <div css={tw`container mx-auto p-2`}>
      <h1 css={tw`m-0`}>
        <Link to="/" css={tw`text-white`}>
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

export default Header
