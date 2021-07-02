import { Article } from './datainterface';

//Blog article below
/*
*id: +1 from previous
*themePic: '/assets/img/id-theme.jpg
*article: any pictures should be <img src='/assets/img/1-picA.png'> '/assets/img/id'-pic'A-Za-z'.jpg. Placement of picture should use class='right|center|left'
*/
export const ARTICLE: Article[] = [
    {
        "id": 0,
        "themePic": "/assets/img/0-theme.png",
        "attrPic": "Photo by RetroSupply on Unsplash",
        "themeText": "Angular blog on Github pages",
        "author": "Brian Venter",
        "date": "2021-05-13T08:29:08.273Z",
        "summary": "Creating a blog by using an Angular Single Page Application and a text file database",
        "article": "<p>This blog is built with Angular and served by Github pages. The database for this blog is a text file. That last sentence is correct, it is not a typo.</p><p>One of the challenges with hosting a progressive blog by means of Github pages is storing the articles. And there are a number of challenges with this. If you host the database somewhere else, any connection authentication details will be open for all to see. One can serve static pages for each new article, but this doesn't quite fit the idea of using a framework. So how does this blog work? Well, you may already be examining the code (open an issue if you have some positive criticism to share), but here is the general breakdown.</p><p>The framework, as mentioned, is Angular along with the Material library. This simplifies much of the development of the Single Page Application and its general theming. The database is a text file. To be precise, it is a TypeScript text file. Each article is an array item and themed according to the key-value pair. The string contents of the <i>article</i> key has HTML tags included for basic layout (paragraphs, bold, italics, img, etc) The blog is deployed to Github pages using the npm package angular-cli-ghpages.</p><p><i>Is this the most efficient way to have a blog?</i> No. <i>Can it easily scale?</i> No. <b>So why do it this way?</b> Let us put aside the not-so-witty 'because I can'. For one, it is a neat exercise in getting to know Angular, SPAs and Github pages. It also provides a simple setup that helps illustrate the various components, templates, modules and routing that make up an Angular application. And the text file database is a reasonable starting point for understanding Observables and working with a data service. By no means is this blog a best practice or easy rollout revolutionary. For me, though, it is an interesting learning path. And that really is the purpose of this blog: capturing lessons learned in the telecommunications industry whilst at the same time learning new concepts and dabbling in different programming languages.</p><p>I am not a prolific writer, and thus this blog will not be growing at a rapid rate. However, some day it really may not be a practical SPA if I am still using the text file as my database. At that point I will likely implement an API gateway (like Labstack's Echo server written in Go) and database server, while tweaking the Angular SPA's code to GET the article information using its HTTPClient utility. But I may keep the latest three articles as part of the text database - just in case someone can benefit from it.<p><p>If you have any suggestions - CSS, HTML, Angular, or something else related - feel free to open an issue. There is always room for improvement.<p>"
    },
    {
        "id": 1,
        "themePic": "/assets/img/1-theme.png",
        "attrPic": "Photo by Brian Venter",
        "themeText": "MXONE in Azure Cloud",
        "author": "Brian Venter",
        "date": "2021-04-29T08:53:44.970Z",
        "summary": "Setting up Mitel's MXONE on Azure with Linux CLI - Part 1",
        "article": "<p>I have been keen on testing Mitel's MXONE in the cloud ever since the Azure image was released. This also required becoming more acquainted with Microsoft's Azure platform. And I want to do this without booting into Windows. It would need to be a purely Linux experience on my end.</p><p>In this first part I document practical first steps with Azure and getting your Linux environment prepared. In the parts to follow we will create the Resource Group and network for the MXONE. We will also set up a point-to-site VPN. From there will get a small virtual machine up and SSH to it. This virtual machine is a temporary one and its purpose is purely to get the MXONE's VHD extracted and copie across. (The extracted VHD is 100GB in size and the copy always failed after a long wait. Instead, I copied the 7GB compressed file up to a temporary virtual machine, unzip it and copy it across as a managed disk).</p><p><h1>Getting started.</h1>I won't go through setting up an Azure account. But there is one suggestion I have: setup balance warnings and limits. This is crucial to avoid having costs run away from you.<br><br>Let's get the Azure client software installed (<a href='https://docs.microsoft.com/en-us/cli/azure/install-azure-cli-linux?pivots=zypper'>link</a>). Here are the commands for openSuse:<li>sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc</li><li>sudo zypper addrepo --name 'Azure CLI' --check https://packages.microsoft.com/yumrepos/azure-cli azure-cli</li><li>sudo zypper install --from azure-cli azure-cli</li><br>Although this walkthrough uses AZCopy on the temporary virtual machine, I am going to document it at this point for reference. <a href='https://docs.microsoft.com/en-us/azure/storage/common/storage-use-azcopy-v10#download-and-install-azcopy'>Download</a> and extract it. For ease of use, you can do the following to make it executable from anywhere if you are using BaSH:<li>Make the binary executable: <b>chmod +x /path/to/azcopy</b></li><li>Edit <b>.bashrc</b></li><li>Add the following to the end of the file: <i>alias azcopy=/path/to/azcopy</i></li><li>Save and exit file. Exit your shell and/or start a new one.</li>Test your Azure CLI and AZCopy installations:<br><b>az login</b> will login your Azure CLI.<br><b>azcopy login --tenant-id 'tenant-id-as-see-in-az-login-output'</b> will login your azcopy client.<br><br>AZCopy was still a bit buggy with logins. Even on brand new virtual machines. Whether I used Ubuntu or openSuse. Fortunately the errors are pretty well documented with solutions - although at first you will think the problem is on your side. Some issues are experienced with keyctl, others occur because the Python install isn't from homebrew. If you find your AZCopy login fails at this point: search the error along with azcopy. There is a good chance the problem and solution has already been documented.<br></p><p>So at this point you have your Azure setup and are ready to run some API commands. In the <a href='./blog/2'>next part</a> we will setup the Azure Resource Group for the MX-ONE.</p><br>"
    },
    {
        "id": 2,
        "themePic": "/assets/img/2-theme.png",
        "attrPic": "Photo by Brian Venter",
        "themeText": "MXONE Network in Azure",
        "author": "Brian Venter",
        "date": "2021-06-11T15:29:31.781Z",
        "summary": "Setting up Mitel's MXONE on Azure with Linux CLI - Part 2",
        "article": "<p></p><br>"
    },
  ];
