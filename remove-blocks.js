var removeBlocks = [
    /* ---------- Core ---------- */
    'core/freeform',
    'core/calendar',

    // Widgets
    'core/rss',
    'core/tag-cloud',

    // Embeds
    // 'core-embed/soundcloud',
    // 'core-embed/spotify',
    // 'core-embed/flickr',

    /* ---------- UAG ---------- */
    'uagb/team',
    'uagb/table-of-contents',
    'uagb/how-to',
    'uagb/review',
    'uagb/lottie',
    'uagb/star-rating',
    
];
 
wp.domReady(function() {
	removeBlocks.forEach(function(blockName) {
		wp.blocks.unregisterBlockType(blockName);
	});
});


/* ---------- List Of All Core Blocks ---------- */

/*
comon 
'core/paragraph',
'core/image',
'core/heading',
'core/gallery',
'core/list',
'core/quote',
'core/audio',
'core/cover ',
'core/file',
'core/video',

formatting 
'core/table',
'core/verse',
'core/code',
'core/freeform — Classic',
'core/html — Custom HTML',
'core/preformatted',
'core/pullquote',

Layout blocks
'core/button',
'core/text-columns — Columns',
'core/media-text — Media and Text',
'core/more',
'core/nextpage — Page break',
'core/separator',
'core/spacer',

widgets
'core/shortcode',
'core/archives',
'core/categories',
'core/latest-comments',
'core/latest-posts',

embeds
'core/embed',
'core-embed/twitter',
'core-embed/youtube',
'core-embed/facebook',
'core-embed/instagram',
'core-embed/wordpress',
'core-embed/soundcloud',
'core-embed/spotify',
'core-embed/flickr',
'core-embed/vimeo',
'core-embed/animoto',
'core-embed/cloudup',
'core-embed/collegehumor',
'core-embed/dailymotion',
'core-embed/funnyordie',
'core-embed/hulu',
'core-embed/imgur',
'core-embed/issuu',
'core-embed/kickstarter',
'core-embed/meetup-com',
'core-embed/mixcloud',
'core-embed/photobucket',
'core-embed/polldaddy',
'core-embed/reddit',
'core-embed/reverbnation',
'core-embed/screencast',
'core-embed/scribd',
'core-embed/slideshare',
'core-embed/smugmug',
'core-embed/speaker',
'core-embed/ted',
'core-embed/tumblr',
'core-embed/videopress',
'core-embed/wordpress-tv'

*/



/* ---------- List Of All UAG Blocks ---------- */
/* 
UAG Block List 
'uagb/advanced-heading',
'uagb/post-grid',
'uagb/post-masonry',
'uagb/post-carousel',
'uagb/section',
'uagb/buttons',            // Multi buttons
'uagb/info-box',
'uagb/testimonial',
'uagb/team',
'uagb/social-share',
'uagb/google-map',
'uagb/restaurant-menu',    // Price List
'uagb/content-timeline',
'uagb/post-timeline',
'uagb/call-to-action',
'uagb/columns',            // Advanced Columns
'uagb/blockquote',
'uagb/marketing-button',
'uagb/table-of-contents',
'uagb/how-to',
'uagb/faq',
'uagb/inline-notice',
'uagb/review',             // Review Schema 
'uagb/taxonomy-list',
'uagb/forms',
'uagb/tabs',
'uagb/lottie',
'uagb/star-rating'

*/