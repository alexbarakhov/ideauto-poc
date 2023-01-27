import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import Card from './Card';


function Tree() {
  return (
    <TreeView
      sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
    >
      <TreeItem nodeId="1" label="TreeItem 1 ">
        <TreeItem nodeId="2" label="TreeItem 2">

            <Card id={55}
                  label="Card"
                  backgroundColor='lightblue'
                  key={97}/>

        </TreeItem>
      </TreeItem>
    </TreeView>
  )
}

export default Tree
