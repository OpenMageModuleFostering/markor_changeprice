/*!
 * MarKor NET
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://opensource.org/licenses/osl-3.0.php
 *
 * @category   MarKorNET
 * @package    MarKor_Changeprice
 * @author     Marcin Korzystka  <support@markornet.com>
 * @copyright  Copyright (c) MarKor NET (http://www.markornet.com)
 * @license    http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
 */
jQuery(document).ready(function(){if(Mage.Cookies.get('DisplayNet')==1) {$j("span.price-including-tax").css("display","none");    $j("span.price-excluding-tax").css("display","block");}});