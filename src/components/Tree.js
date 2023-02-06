import TreeView from '@mui/lab/TreeView'
import TreeItem from '@mui/lab/TreeItem'

function Tree() {
  return (
    <TreeView
      sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
    >
      <TreeItem nodeId='1' label='TreeItem 1 '>
        <TreeItem nodeId='2' label='TreeItem 2'>
          <TreeItem nodeId='3' label='TreeItem 3'></TreeItem>
        </TreeItem>
      </TreeItem>
    </TreeView>
  )
}

export default Tree
