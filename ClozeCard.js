/**
 * Created by mothw on 6/22/2017.
 */

function ClozeCard(text,cloze)
    {
        this.fullText = text;
        this.cloze = cloze;
        this.type = 'cloze';
        this.partial = '';
        /////////////////
//        var partial = '';
        var spacer = '___________';

        if(text.indexOf(cloze)==-1)
            {
                console.log('Error, cloze text is not a substring of text.');
            }
        else
            {
                var arr = text.split(cloze);
                this.partial += arr[0];
                for (i=1; i<arr.length; i++)
                    {
                        this.partial += spacer;
                        this.partial += arr[i];
                    }
            }
        // "new" is optional
        return this;
    }

    exports.ClozeCard = ClozeCard;