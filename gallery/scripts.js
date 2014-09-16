$.fn.gallery = function (columns) {
    columns = columns || 4;
    var $gallery = $('#gallery'),
    	$galleryList = $gallery.find('.gallery-list'),
    	$selected = $gallery.find('.selected'),
    	$disableBackground = $('<div />').addClass('disabled-background'),
    	$numberImgs = $galleryList.children().length,
    	$currentImage,
    	$prevImg,
    	$nextImg;

    $gallery.addClass('gallery');
    $selected.hide();
    $galleryList.css('width', columns * 260 + 'px');

    $galleryList.on('click', 'img', function() {
    	var $this = $(this);
    	$currentImage = $this.data('info');

		appendToSelection();    	
    });

    $selected.on('click', 'img', function() {
    	var $this = $(this);
    	if ($this.attr('id') === 'next-image' || $this.attr('id') === 'previous-image') {
    		$currentImage = $(this).data('info');

			appendToSelection(); 
    	} else {
    		hideSelection();
    	}
    });

    function appendToSelection () {

    	if ($currentImage === 1) {
    		$prevImg = $numberImgs;
    	} else {
    		$prevImg = $currentImage - 1;
    	}

    	if ($currentImage === $numberImgs) {
    		$nextImg = 1;
    	} else {
    		$nextImg = $currentImage + 1;
    	}

    	clearSelection();

    	var $currentImgClone = $galleryList.find('[data-info="'+ $currentImage +'"]').clone(true),
    		$prevImgClone = $galleryList.find('[data-info="'+ $prevImg +'"]').clone(true).attr('id', 'previous-image'),
    		$nextImgClone = $galleryList.find('[data-info="'+ $nextImg +'"]').clone(true).attr('id', 'next-image');


    	$selected.find('.previous-image').append($prevImgClone);
        $selected.find('.current-image').append($currentImgClone);
        $selected.find('.next-image').append($nextImgClone);

        $galleryList.addClass('blurred');
        $selected.show();
        $selected.before($disableBackground);
    }

    function clearSelection () {
    	$selected.children().each(function() {
    		$(this).empty();
    	});
    }

    function hideSelection () {
    	$selected.hide();
        $galleryList.removeClass('blurred');
        $('.disabled-background').remove();
    }
};