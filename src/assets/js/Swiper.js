function Swiper(target, options){
  this.container = document.querySelector(target)
  this.wrapper = document.querySelector(`${target}>.swiper-wrapper`)
  this.slide = document.querySelector(`${target}>.swiper-wrapper>.swiper-slide`)
  this.paginationWrapper = document.querySelector(`${target}>.swiper-pagination`)

  this.count = this.wrapper.children.length
  this.slideCount = this.wrapper.children.length
  this.width = this.slide.clientWidth
  this.index = 0

  this.originPosition = undefined
  this.translateX = undefined
  this.downTime = undefined
  this.upTime = undefined
  this.hasMouseEnd = false
  this.translateX = undefined

  this.init()
}

Swiper.prototype.init = function(){
  this.build()
  this.bindEvent()
}

Swiper.prototype.build = function(){
  let pagination

  for(let i=0;i<this.count;i++){
    pagination = document.createElement('div')
    pagination.classList.add('swiper-pagination-switch')
    if(i === 0){
      pagination.classList.add('swiper-pagination-switch-active')
    }
    this.paginationWrapper.appendChild(pagination)
  }

  // const lastNode = this.wrapper.lastElementChild.cloneNode(true)
  // const firstNode = this.wrapper.firstElementChild.cloneNode(true)

  this.container.style.width = `${this.width}px`

  // this.wrapper.insertBefore(lastNode, this.wrapper.firstElementChild)
  // this.wrapper.appendChild(firstNode)

  this.wrapper.style.transform = `translate3d(0,0,0)`
}

Swiper.prototype.bindEvent = function(){
  const callback = this.handleMove.bind(this)
  this.container.addEventListener('touchstart', (e) => {
    // e.preventDefault()
    this.downTime = Date.now()
    this.wrapper.style.transitionDuration = ``
    this.translateX = this.translateX !== undefined ? this.translateX : 0


    this.hasMouseEnd = false
    // console.log('touch start')
    this.originPosition = e.touches[0].screenX

    window.addEventListener('touchmove', callback)
    window.addEventListener('touchend', (e) => {
      // e.preventDefault()
      if(this.hasMouseEnd){
        return
      }
      this.page(e.changedTouches[0].screenX - this.originPosition)
      this.hasMouseEnd = true
      // console.log('up')
      window.removeEventListener('touchmove', callback)
    })
  })
}

    //翻页
    Swiper.prototype.page = function(dist){
      this.upTime = Date.now()
      if(this.upTime - this.downTime <= 300){
        if(dist === 0){
          return
        }
        else if(dist < 0){
          this.translateX -= this.width
        }
        else{
          this.translateX += this.width
        }
      }
      else{
        const pageCount = Math.floor(Math.abs(dist)/this.width)
        const swipeDist = Math.abs(dist)%this.width
        //判断是否过半  以及是否滑动多页
        if(swipeDist < this.width/2 && dist > 0){
          this.translateX += pageCount*this.width
        }
        else if(swipeDist >= this.width/2 && dist > 0){
          this.translateX += (pageCount+1)*this.width 
        }
        else if(swipeDist >= this.width/2 && dist < 0){
          this.translateX -= (pageCount+1)*this.width 
        }
        else{
          this.translateX -= pageCount*this.width
        }
      }
      if(this.translateX>0){
        this.translateX = 0
      }
      else if(this.translateX<-(this.count-1)*this.width){
        this.translateX = -(this.count-1)*this.width
      }
      
      this.wrapper.style.transitionDuration = `300ms`
      this.wrapper.style.transform = `translate3d(${this.translateX}px,0,0)`
      
      this.paginationChange()
    }

    Swiper.prototype.paginationChange = function(){
      this.index = Math.abs(this.translateX)/this.width

      this.paginationWrapper.querySelector('.swiper-pagination-switch-active').classList.remove('swiper-pagination-switch-active')
      Array.from(this.paginationWrapper.querySelectorAll('.swiper-pagination-switch')).map((item,index) => {
        if(index === this.index){
          item.classList.add('swiper-pagination-switch-active')
        }
      })
    }

    //拖动效果
    Swiper.prototype.handleMove = function(e){
      // e.returnValue = true
      //边界判断
      // if(this.translateX === 0){
      //   if(e.touches[0].screenX - this.originPosition > 0){
      //     this.translateX = -this.slideCount*this.width
      //   }
      // }
      // else if(this.translateX === -(this.slideCount+1)*this.width){
      //   if(e.touches[0].screenX - this.originPosition < 0){
      //     this.translateX = -this.width
      //   }
      // }
      this.wrapper.style.transform = `translate3d(${this.translateX + e.touches[0].screenX - this.originPosition}px,0,0)`
    }

    export default Swiper