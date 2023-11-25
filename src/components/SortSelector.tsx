import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import useGameQueryStore from '../store'

const SortSelector = () => {
  const sortOrders = [
    { value: '', label: 'Relevence' },
    { value: '-added', label: 'Date Added' },
    { value: '-rating', label: 'Average Rating' },
    { value: 'name', label: 'Name' },
    { value: '-released', label: 'Release Date' },
    { value: '-metacritic', label: 'Popularity' },
  ]
  const sortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder)
  const setSortOrder = useGameQueryStore((s) => s.setSortOrder)
  const currentSortOrder = sortOrders.find((order) => order.value === sortOrder)

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By: {currentSortOrder?.label || 'Relevence'}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => setSortOrder(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default SortSelector
