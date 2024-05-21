import './AudiDraggableList.css'
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd'
import drag from '../../../stories/assets/drag.svg'
interface AudiDraggableListInterface{
    list: Array<string>
}

export const AudiDraggableList =({
    list
} : AudiDraggableListInterface) =>{

    function reorder<T>(list: T[], startIndex:number, endIndex:number){
        const result = Array.from(list)
        const [removed] = result.splice(startIndex,1)
        result.splice(endIndex, 0, removed)

        return result
    }

    function onDragEnd(result:any){
        if(!result.destination){
            return
        }

        const listOrdered = reorder(list, result.source.index, result.destination.index)
        list = listOrdered

        return listOrdered
    }

    return(
        <section className='DraggableListSection'>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId='list' type='list' direction='vertical'>
                    {(provided) =>(
                        <article 
                            className='DraggableListArticle' 
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            >
                            {list.map((item, index) =>{
                                return(
                                    <Draggable draggableId={index.toString()} index={index} key={index}>
                                        {(provided) =>(
                                            <div 
                                                className='DraggableListItem' 
                                                ref={provided.innerRef}
                                                {...provided.dragHandleProps}
                                                {...provided.draggableProps}
                                                >
                                                    <span className='DraggableListSpan'>{item}</span>
                                                <img src={drag} alt='Drag Icon' className='DraggableListIcon'/>
                                            </div>
                                        )}
                                    </Draggable>
                                )
                            })}
                            {provided.placeholder}
                        </article>
                    )}
                </Droppable>
            </DragDropContext>
        </section>
    )
}

export default AudiDraggableList