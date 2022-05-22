export default {
    inserted(el, bindings, vnode){
        let btnPermissionValue = bindings.value
        let boolean = vnode.context.$store.state.btnpermission.buttonPermission[btnPermissionValue]
        !boolean && el.parentNode.removeChild(el)
        
        
        
    }
}